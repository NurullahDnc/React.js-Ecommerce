import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './CategorySlice'

export const store = configureStore({
  reducer: {
    categories : categorySlice
  },
})

// diger sayfadan ulasmak icin dipast atmamız gerek