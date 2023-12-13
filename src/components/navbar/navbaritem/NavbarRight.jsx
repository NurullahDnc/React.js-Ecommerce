import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";



export default function NavbarRight() {
  return (
    <div className='flex items-center gap-8 '>
        <div className='flex items-center border p-2 rounded-full bg-gray-200'>
            <input className='outline-none bg-gray-200' type="text" placeholder='Arama Yapınız...'/>
            <IoIosSearch size={28} />
        </div>
        
        <FaHeart size={28} />
        
        <div className='relative'>
            <div className='absolute bg-red-500 -right-3 -top-3 flex rounded-full w-5 h-5 items-center justify-center text-white'>3</div>
            <SlBasket size={28} />
        </div>
      

    </div>
  )
}
