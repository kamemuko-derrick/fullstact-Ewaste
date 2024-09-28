const stripe = require('../../config/stripe')
const addToCartModel = require('../../models/cartProduct')
const orderModel = require('../../models/orderProductModule')

const endpointSecrete = process.env.STRIPE_WEBHOOK_SECRETEKEY

async function getLineItems(lineItems){
    let ProductItems = []

    if(lineItems?.data?.length){
        for(const item of lineItems.data){
            const product = await stripe.products.retrieve(item.price.product)
            const productId = product.metadata.productId
            const productData = {
                productId : productId,
                name : product.name,
                price : item.price.unit_amount /100,
                quantity : item.quantity,
                image : product.images
            }
            ProductItems.push(productData)

        }
        
    }
    return ProductItems
}

const webhooks = async(request,response)=>{
    const signature = request.headers['stripe-signature']
    const payloadString = JSON.stringify(request.body)
    const header = stripe.webhooks.generateTestHeaderString({
        payload:payloadString,
        secret: endpointSecrete,
    });
    let event;

    try {
        event = stripe.webhooks.constructEvent(
          payloadString,
          header,
          endpointSecrete
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return response.sendStatus(400);
      }

      //handle the event

      switch (event.type){
        case 'checkout.session.completed':
            const session = event.data.object;
            const lineItems = await stripe.checkout.sessions.listLineItems(session.id)
            const productDetail = await getLineItems(lineItems)

            const orderDetails = {
                productDetails : productDetail,
                email : session.customer_email,
                userId: session.metadata.userId,
                paymentDetail: {
                    paymentId: session.payment_intent,
                    payment_method_types: session.payment_method_types,
                    payment_status : session.payment_status
                },
                shipping_options: session.shipping_options.map(s =>{
                    return{
                        ...s,
                        shipping_amount : s.shipping_amount /100}
                }),
                totalAmount: session.amount_total /100
            }
            const order = new orderModel(orderDetails)
            const saveOrder = await order.save()

            if(saveOrder?._id){
                const deleteCartItem = await addToCartModel.deleteMany({userId : session.metadata.userId})
            }
            break;
            //...handle other event types
            default:
                console.log('unhandled event type ${event.type}')
      }

    response.status(200).send()
}

module.exports = webhooks

