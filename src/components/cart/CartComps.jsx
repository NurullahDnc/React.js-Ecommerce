import React from 'react'
import { MdDelete } from "react-icons/md";
import { removeFromCart } from '../../redux/CardSlice';
import { useDispatch } from 'react-redux';


export default function CartComps({cart}) {
    const dispatch = useDispatch()

  return (
        <div className='flex '>
            <div className='min-w-[180px] h-[180px] p-7 '><img className=' w-[100%] h-[100%] object-fill ' src={cart.image} alt="" /></div>
            <div className='flex justify-between px-5 items-center text-center w-[100%] '>
                <div className='max-w-[50%] min-w-[50%] flex-col text-left'>
                    <div className=' font-bold text-[16px]  '> {cart.title} </div>
                    <div className='text-[17px] '>{cart.category}category </div>
                </div>

                <div className='w-[20%]  text-[17px] font-bold '> Adet: {cart.quantity} </div>
                <div className='w-[20%] font-bold text-[19px] '>  {cart.price} <span className='pl-1'>TL</span> </div>
                {/*parametre olarak id gonderiyoruz */}
                <div onClick={()=>{
                     dispatch (removeFromCart(cart.id));
                }} className='w-[10%] text-3xl mr-5 flex justify-center cursor-pointer'>
                    <MdDelete/>
                </div>
            </div>

        </div>

        
      
  )
}
