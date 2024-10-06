import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import {Category} from '../../models/Category';



export interface CategoryState {
    currentCategory:Number;
}

// export const getUsers = createAsyncThunk("getUsers", async () => {
//     const { data } = await getAllUsers()
//     return data;
// })

const initialState: CategoryState = {
    currentCategory:0
}

export const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        updateCategory: (state, action: PayloadAction<Number>) => {
            state.currentCategory = action.payload;
        },
    },


    // extraReducers: (builder) => {
    //     // אם הפעולה הצליחה
    //     builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<Array<User>>) => {
    //         state.users = action.payload;
    //     })
    // }


})

export const { updateCategory } = CategorySlice.actions

export default CategorySlice.reducer
