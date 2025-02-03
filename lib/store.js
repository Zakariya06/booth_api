 
import ImageSlice from "@/lib/feature/ImageSlice"; 
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
      imageReducer: ImageSlice
    }, 
})