
// kategorileri api den cektik ve redux toolkid  yapısı kulanıldı 

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
  }

export const GetCategories = createAsyncThunk('Category ', async() =>{
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = response.json();
    return data
    
})

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(GetCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
    
}
  })

  export default categorySlice.reducer

