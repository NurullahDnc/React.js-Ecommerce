import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'
export default function Home() {

    const [sort, setShort] = useState();
    // setcategory'i Category comps gondeiyoruz categori name almaıs icin, aldıktan sonra product comps. gonderiyoruz category'i
    const [category, setCategory] = useState();

  return (
    <div>

      <SliderComp />
      <Sorting />

      <div className='flex'>
        <Category setCategory={setCategory} />
        <Products category={category} />
      </div>


    </div>
  )
}
