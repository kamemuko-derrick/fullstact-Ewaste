import React from 'react'
import SUCCESSIMAGE from '../assest/success.gif'
import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className='bg-white w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
      <img 
        src={SUCCESSIMAGE}
        height={150} 
        width={150}
        alt='success image'
      />
      <p className='text-green-600 font-bold text-xl'>Payment Successfully</p>
      <Link to={"/order"} className='p-2 px-3 mt-6 border-2 border-green-600 rounded font-semibold text-gray-600 hover:bg-green-600 hover:text-white'>See order</Link>
    </div>
  )
}

export default Success