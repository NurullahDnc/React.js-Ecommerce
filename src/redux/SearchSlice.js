import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {STATUS} from '../utils/status'

/*baslangic durumunda  initialState oluyor ? */
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
  export const getSearchProducts = createAsyncThunk('getProducts', async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
  })
 

  //slice olusturduk
  const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder 
            //*----------------urun olayları icin
        
        .addCase(getProducts.pending, (state, action) => {
            state.productStatus = STATUS.LOADING
        })
      
        .addCase(getProducts.fulfilled, (state, action) =>{
            state.productStatus = STATUS.SUCCESS
            state.products = action.payload
        })

         .addCase(getProducts.rejected, (state, action) =>{
            state.productStatus = STATUS.FAIL
        })

        
    }

  })

export default SearchSlice.reducer

  //! pending  = sayfaya yuklenme durumu