const orderModel = require("../../models/orderProductModule")

const orderController=async(request,response)=>{
    try{
        const currentUser = request.userId

        const orderList = await orderModel.find({userId : currentUser}).sort({createdAt: -1})

        response.json({
            data : orderList,
            message : "order list",
            success : true
        })
    }catch(error){
        response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = orderController