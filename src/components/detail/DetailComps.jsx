import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/CardSlice';

export default function DetailComps({productDetail}) {

    const [alertWarning, setAlertWarning] = useState(false)
    const [addSuccsess, setAddSuccsess] = useState(false)

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1) 

    // adet arttırma
    const decrement = ()=>{
        //quanity 0 dan buyuk olursa arttır
        if(quantity>1) setQuantity(quantity-1)
    }

    //adet azaltma
    const incerment = ()=>{
        if( productDetail?.rating?.count > quantity)         setQuantity(quantity+1)

    }
    //sepete ekleme 
    const addBasket = ()=>{
        //sepete gosterilecek ozelikleri gonderiyoruz 
        dispatch(addToCart({ 
            id: productDetail?.id, 
            title: productDetail.title, 
            price: productDetail?.price , 
            image: productDetail?.image, 
            category: productDetail?.category,
            quantity: quantity,
            
        }))

        setAddSuccsess(true)
        setTimeout(() => {
            setAddSuccsess(false)
        }, 2000);
        // sucsess();

    }
    // const sucsess= ()=>{
        
    // }

  return (
    <div className='flex w-[100%] items-center'>
        <div className=' w-[55%]'>
            <img className='w-[500px] h-[500px] object-contain flex m-auto ' src={productDetail.image} alt="" />
        </div>
        <div className=' w-[45%] relative'>

            <h1  className='font-bold text-3xl'>{productDetail.title} </h1>
            <p className='my-2'>{productDetail.category} </p>
            <p className='font-bold text-[28px] my-5'>{productDetail.price}, <span>TL</span> </p>
            <div className='flex my-4'>
                <p className='mr-5 text-xl'> rate:  { productDetail?.rating?.rate } </p>
                <p className='mr-5 text-xl'> count: { productDetail?.rating?.count } </p>

            </div>
            <div className='flex text-2xl font-bold '>
                <p onClick={decrement} className='cursor-pointer text-3xl '>-</p>
                <input className='w-[55px] text-center mx-5 outline-none' type="text" value={quantity} />
                <p onClick={incerment} className='cursor-pointer'>+</p>

            </div>

            <button onClick={addBasket} className='bg-gray-200 py-4  w-[205px] mt-5'>Sepete Ekle</button>


        </div>

        {
        addSuccsess ? <div className="add-success ">
                        <div>Sepete Eklendi.</div>
                    </div> : ""
        }

    </div>
  )
}
