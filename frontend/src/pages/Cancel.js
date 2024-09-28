import React from 'react'
import CANCELIMAGE from '../assest/cancel.png'
import { Link } from 'react-router-dom'
const Cancel = () => {
  return (
    <div className='bg-white w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
    <img 
      src={CANCELIMAGE}
      height={150} 
      width={150}
      alt='cancel image'
    />
    <p className='text-red-600 font-bold text-xl'>Payment Cancel</p>
    <Link to={"/cart"} className='p-2 px-3 mt-6 border-2 border-red-600 rounded font-semibold text-gray-600 hover:bg-red-600 hover:text-white'>Go to Cart</Link>
  </div>
  )
}

export default Cancel