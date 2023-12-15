import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../redux/ProductSlice';
import Loading from '../components/Loading';
import DetailComps from '../components/detail/DetailComps';

export default function Detail() {

    //gelen id'yi burada karsılayacagız,  id url'den dinamik olarak alır
    const {id} = useParams();
    const dispatch = useDispatch();
    // gelen veri = productDetail,  olaylar  =  productDetailStatus
    const { productDetail, productDetailStatus } = useSelector(state => state.products);

    console.log(productDetail, "productdetail")

    useEffect(()=>{
        // dispatch üzerinden, getDetailProduct func. cagrıcaz, id parametresi alıyor
        dispatch(getDetailProduct(id))

    },[dispatch,id])

  return (
    <div>
        
        {
            //oaly loadig ise loadın comps cagır degil ise DetailComps git props olarak urunu gonder
            productDetailStatus == "LOADING"? <Loading />: <DetailComps productDetail={productDetail}  />
        }
      
    </div>
  )
}
