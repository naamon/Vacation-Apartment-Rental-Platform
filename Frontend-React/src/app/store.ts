import { configureStore } from "@reduxjs/toolkit";
import user from '../features/user/userSlice'
import apartment from '../features/apartment/apartmentSlice'
import category from '../features/category/CategorySlice'
import rent from '../features/rent/rentSlice'


export const store=configureStore({
    reducer:{apartment,user,category,rent},
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
