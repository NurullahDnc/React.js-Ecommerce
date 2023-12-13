import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {GetCategories} from '../../redux/CategorySlice'

export default function Category() {
  
  //redux ile gelen veriler categories icerisinde
  const {categories} = useSelector(state => state.categories)
  const dispatch = useDispatch()


  console.log(categories, "categories")

  
  useEffect(()=>{
    dispatch(GetCategories())
  },[dispatch])

  return (
    <div className='w-1/6 bg-gray-100 p-4'> 
      
        <div className='border-b-2 font-bold text-xl bg-gray-100 py-3'>KATEGORİLER</div>
        {
          categories?.map((category,i)=>(
            <div className='py-2 cursor-pointer hover:bg-gray-200' key={i}>{category} </div>
          ))
        }
      
    </div>
  )
}
