import React from 'react'

export default function Sorting({setShort}) {
  return (
    <div className='bg-gray-100 my-3 p-5 flex justify-end items-center'>
      
      <select onChange={(e)=> setShort(e.target.value)} className='bg-white py-2 px-4 outline-none rounded-full' name='' id=''>
        <option  value="" >Seçiniz</option>
        <option  value="inc" >Artan</option>
        <option  value="dec" >Azalan</option>

      </select>
      
      
    </div>
  )
}
