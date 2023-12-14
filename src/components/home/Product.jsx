import React from 'react'

export default function Product({product}) {
  return (
    <div className='w-[30%] p-3 m-4 border rounded-lg relative cursor-pointer flex items-center-center  flex-col hover:bg-gray-100 '>

        <div className='flex justify-center'>
            <img className='w-[250px] h-[250px]  ' src={product?.image} alt="" />
        </div>
        <div className='h-[50px] my-1 overflow-hidden  '>
            <p className='items-center'> {product.title} </p>
        </div>
        <div className='my-1'>
            <p className='text-gray-700'>{product.category} </p>
        </div>

        <div>
            <p className=' font-bold text-[18px] '>{product.price} <span className='ml-1'>TL</span> </p>
        </div>
      
    </div>
  )
}
