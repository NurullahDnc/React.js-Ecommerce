import React, { useEffect } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCart } from '../../../redux/CardSlice';
import { useNavigate } from 'react-router-dom';



export default function NavbarRight() {
  
  const dispatch = useDispatch();
  const {carts} = useSelector(state => state.carts)

  console.log(carts," carts-navbar" );

  useEffect(()=>{
    dispatch(getTotalCart())
  }, [getTotalCart])

  const Navigate = useNavigate();
  

  return (
    <div className='flex items-center gap-8 '>
        <div className='flex items-center border p-2 rounded-full bg-gray-200'>
            <input className='outline-none bg-gray-200' type="text" placeholder='Arama Yapınız...'/>
            <IoIosSearch size={25} />
        </div>
        
        <FaHeart size={25} />
        
        <button onClick={()=> Navigate(`cart`)} className='relative cursor-pointer'>
            <div className='absolute bg-red-500 -right-3 -top-3 flex rounded-full w-5 h-5 items-center justify-center text-white'> {carts?.length} </div>
            < SlBasket size={25} />
        </button>
      

    </div>
  )
}
