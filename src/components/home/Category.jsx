import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {GetCategories} from '../../redux/CategorySlice'

export default function Category({setCategory}) {
  
  //* redux ile gelen veriler categories icerisinde

  //dispatch cagıryoruz, olusturuyoruz
  const dispatch = useDispatch()

    // useSelector ile goster, cagırıyoruz, state icerisine gir state altında categoreies (status.js den geliyor categories)
  const {categories} = useSelector(state => state.categories)

  // console.log(categories, "categories")
  
  // sayfa yuklendikten sonra, dispatch uzerinen GetCategories func. cagr
  useEffect(()=>{
    dispatch(GetCategories())

  },[dispatch])


  return (
    <div className='w-1/6 bg-gray-100 max-h-screen ' > 
      
        <div className='border-b-2 font-bold text-xl bg-gray-100 p-4 py-3'>KATEGORİLER</div>
        {
          categories?.map((category,i)=>(
            //kategori menusunde click oldugunda, category name'ini setCategory useStateien gonderiyoruz, filitreleme icin
            <div onClick={()=> setCategory(category)} className='leading-9 cursor-pointer font-Nunito hover:bg-gray-200' style={{textIndent:"20px"}} key={i}>
              {category} 
            </div>
          ))
        }
      
    </div>
  )
}
