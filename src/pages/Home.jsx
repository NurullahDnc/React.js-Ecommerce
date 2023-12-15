import React, { useEffect, useState } from 'react';
import SliderComp from '../components/home/SliderComp';
import Sorting from '../components/home/Sorting';
import Category from '../components/home/Category';
import Products from '../components/home/Products';

export default function Home() {
  // Durum değişkenlerini burada tanımlayın
  const [sort, setShort] = useState();
  const [category, setCategory] = useState();


  return (
    <div>
     

      <SliderComp />
      <Sorting setShort={setShort} />

      <div className='flex'>
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
}
