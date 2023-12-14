import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {STATUS} from '../utils/status'

/*baslangic durumunda  initialState oluyor */
const initialState = {
    // tum urunler icin dizi icerisinde productslar 
    products: [],
    // urunlerin baslangıc durumu    -- utlis/status.js de
    productStatus:  STATUS.IDLE,
    // detaylar sayfasıni yeniden olusturmamak icin burda tanımladık, product detalistler burda
    productDetail: [],
    // detaylar sayfası icin de statusu(durumu) olacak
    productDetailStatus: STATUS.IDLE,

  }
// api' den urunleri alıyor
  export const getProducts = createAsyncThunk('getProducts', async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
  })

  //categorye gore alıcak
  export const getCategoryProduct = createAsyncThunk('getCategoryProduct', async(category)=>{
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json()
    return data
  })

  //apiden urunun detayını alıyor, parametre olarak id alıyor
  export const getDetailProduct = createAsyncThunk('getDetailProduct', async(id)=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return data
  })

 

  //slice olusturduk
  const productSlice = createSlice({
    name: "products",
    initialState,
    //api istek atıgımız icin burda tanımlamayacagız
    reducers:{},
    // Burda tanımlama yapıcaz, dısarıdan builder alıyor, almıs oldugu builder uzerinden de, .addCase ekleyerek devam ediyoruz
    extraReducers: (builder)=>{
        builder 
            //*----------------urun olayları icin
        
        // getProducts funcda, pending sayfaya yuklenme durumunda
        .addCase(getProducts.pending, (state, action) => {
            //state altında productStatus'leri STATUS.LOADING'e cevir, true yapıcaz
            state.productStatus = STATUS.LOADING
        })
      
        // getProducts funcda, pending durumundan cıkıp, fulfilled yani tamalandıgında
        .addCase(getProducts.fulfilled, (state, action) =>{
            //state altında productStatus'leri STATUS.LOADING'e cevir, true yapıcaz
            state.productStatus = STATUS.SUCCESS
            //state iceriisnde productlar, action.payload ile dolmasını istiyoruz
            state.products = action.payload
        })

        // getProducts funcda,  hata verdigi zaman
         .addCase(getProducts.rejected, (state, action) =>{
            //state altında productStatus'leri STATUS.LOADING'e cevir, true yapıcaz
            state.productStatus = STATUS.FAIL
        })

            //*----------------getDetailProduct, urun detayları icin

        .addCase(getDetailProduct.pending, (state, action) => {
            state.productDetailStatus = STATUS.LOADING
        })

        .addCase(getDetailProduct.fulfilled, (state, action) =>{
            state.productDetailStatus = STATUS.SUCCESS
            state.productDetail = action.payload
        })

         .addCase(getDetailProduct.rejected, (state, action) =>{
            state.productDetailStatus = STATUS.FAIL
        })

            //*----------------getCategoryProduct, urun categoryleri icin

            .addCase(getCategoryProduct.pending, (state, action) => {
              state.productDetailStatus = STATUS.LOADING
          })
  
          .addCase(getCategoryProduct.fulfilled, (state, action) =>{
              state.productDetailStatus = STATUS.SUCCESS
              state.products = action.payload
          })
  
           .addCase(getCategoryProduct.rejected, (state, action) =>{
              state.productDetailStatus = STATUS.FAIL
          })
    }

  })

export default productSlice.reducer

  //! pending  = sayfaya yuklenme durumu