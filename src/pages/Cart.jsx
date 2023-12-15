import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getTotalCart } from '../redux/CardSlice';
import CartComps from '../components/cart/CartComps';

export default function Cart() {

    const dispatch = useDispatch();
    const {carts, totalAmount, itemCount} = useSelector(state => state.carts)

  
    useEffect(()=>{
      dispatch(getTotalCart())
    }, [getTotalCart]);
  
    const Navigate = useNavigate();

  
  return (
    <div className='flex w-[100%]'>
        {
            carts?.length > 0 ? <div className='min-w-[80%]  '>
                {carts?.map((cart, i) => (
                    <CartComps i={i} cart={cart} />
                ))}
            </div>: 
            <div className='min-w-[75%] text-[25px] text-center mt-8 '>
                sepetiniz boş
            </div>
            
        }
        {
            console.log(carts, "carts-cart")
        }
        <div className='w-[25%] mt-[55px] px-2 '>
            <div  className='my-3 text-[19px] text-center'>Sipariş Özeti</div>
            <hr className='text-gray-100 m-auto ' />
            <div className='text-[18px] justify-between my-5 mt-7 flex'> Sipariş Toplam : <span className='mr-10'> {totalAmount} </span> </div>
            <hr className='text-gray-100 m-auto  my-5' />
            
            <button className=' min-w-[250px] rounded-md p-3 block m-auto  bg-red-700 '>ÖDEME</button>
        </div>

    </div>
  )
}
