import { createSlice } from "@reduxjs/toolkit";

/*baslangic durumunda  initialState oluyor */
const initialState = {
    // tum urunler icin dizi icerisinde productslar 
    products: [],
    // urunlerin baslangıc durumu    -- utlis/status.js de
    productStatus:  STATUS.IDLE,
    // detaylar sayfasıni yeniden olusturmamak icin burda tanımladık
    productDetail: [],
    // detaylar sayfası icin de statusu(durumu) olacak
    productDetailStatus: STATUS.IDLE,

  }
