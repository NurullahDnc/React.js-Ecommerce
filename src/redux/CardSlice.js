//* sepete eklem islemerini burda yapıcaz, miktar toplam hesaplama

import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { json } from "react-router-dom";


//* localStore islemler, cart'ları set edicez, localdan cartları alıcaz, jsonparse ederek return edicez
const fetchFromLocalStorge = ()=>{
    //local store'den cart'ı cagırıyoruz
    let cart = localStorage.getItem('cart');
    //card adında yapı varsa 
    if(cart){
        //local storeden gelen ust'e cagırdıgımzı urunleri parse et, return
        return JSON.parse(localStorage.getItem('cart'))
    }else{
        return []; // yoksa bos array don
    }

}

//* parametere alıyor, local'a kayıt yapıyor 
const storeInLocalStore = (data)=>{
    //parametre gelen data'yı local'a set edicez, cart oalyı olacak, 
    localStorage.setItem('cart', JSON.stringify(data))
}


//*baslangcta gosterilecek olanlar
const initialState = {
    // card icerisindeki veriyi localstore den alıcaz
    carts: fetchFromLocalStorge(),
    itemCount: 0,
    totalAmount: 0

}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    //api uzerinden veri almadıgımız icin burda tanımliyoruz, apı den alırsak extraReducers tanımlıyoruz name biz verdik?
    reducers: { // func., dısarıdan state ve action alıyor

        addToCart: (state, action)=>{ //*sepete yoksa ekle, varsa adet arttır
            //carts find et, urunleri geziyoruz, item.id degeri action.id disarıdan gelen esit olanı degiskene at
            const isItemCart = state.carts.find(item => item.id === action.payload.id) // carts initialState geldi
            // sepete urun var ise, map ederek duzenleyecez
            if(isItemCart){
                //state'nin carts'larını gezicez
                const tempCart = state.carts.map(item =>{
                    //item'dan gelen id ile action'dan "dısarıdan" gelen id esit ise, adet'e gore fiyat hesaplama, burda olacak
                    if(item.id === action.payload.id){
                        //urunun quantity'ini ve actiondan gelen quantity toplamını aldık
                        let tempQty = item.quantity + action.payload.quantity
                        //toplam hesaplama, adet ve urunun fiyatını toplama
                        let tempTotalPrice = tempQty + item.price
                        return{
                            // tum ...item uzerinden  quantiy olayı dondur: tempQty denk gelecek, icerisine atıyoruz ?
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice
                            
                        }

                        
                    }else{
                        return item  // esit degil ise item don
                    }
                    
                })
                

                //tempCart al state icerisinde carts at
                state.carts = tempCart;
                //local'a set edicez paramrete ile godericez
                storeInLocalStore(state.carts);

                
            }else{  // id esit olan urun yoksa direkt actiondan gelen urunu push'la
                state.carts.push(action.payload)
                //sonra local'a kayıt yapıcaz
                storeInLocalStore(state.carts);
            }


        },

        //* sepeten silme 
        removeFromCart: (state, action)=>{
            // carts'dan ve action'dan gelen id'lerden farklı olanları filitrele
            const tempCart = state.carts.filter(item => item.id !== action.payload)
            // filter sonrası carts icerisine atıyoruz
            state.carts = tempCart
            //local guncelleme
            storeInLocalStore(state.carts);
        },

        //* sepet temizleme
        clearCart: (state)=>{
            state.carts = []
            storeInLocalStore(state.carts);
        },

        //* toplama islemi ?
        getTotalCart: (state) =>{

            // toplam hesaplama yapıcaz reduce toplama yapıyor  totalAmount icerisine at
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                //cartotal uzeine price ekle?
                return cartTotal += cartItem.price * cartItem.quantity

              }, 0);
            //sepetteki urunu donuyor, navbarda gostremek icin
            state.itemCount = state.carts.length

            console.log(state.carts.quantity, "quantity-slice")
        }
            
    }
    
})

// reducer icerisine yazdık dısarıda kulanmak icin action olayrarını export ediyoruz
export const {addToCart, removeFromCart, clearCart,getTotalCart  } = cartSlice.actions
export default cartSlice.reducer



//! quantiy  = adet urunun