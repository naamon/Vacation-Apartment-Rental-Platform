import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { addUser, getAllUsers } from '../../services/user';
import User from '../../models/User';
import { Rent } from '../../models/Rent';
import { addRent, getALLARents, getRentById } from '../../services/rent';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';




export interface RentState {
    myRents: Array<Rent>,
    rents:Array<Rent>
}

// export const addNewRent = createAsyncThunk("", async (user: User) => {
//     const { data } = await addUser(user)
//     return data;
// })

export const getMyRents = createAsyncThunk("getMyRents", async () => {
   
    const currentUser = useSelector((state: RootState) => state.user.currentUser);
     
    const { data } = await getRentById(currentUser.id);
    return data;
})

export const addNewRent = createAsyncThunk("", async (rent: Rent) => {
    const { data } = await addRent(rent)
    return data;
})

export const getRents = createAsyncThunk("getRents", async () => {
    const { data } = await getALLARents()
    return data;
})

const initialState: RentState = {
    myRents: [{apartment:{id:1,price:100},id:7,numberOfDays:1}],
    rents:[]
}

export const rentSlice = createSlice({
    name: 'rent',
    initialState,
    reducers: {
        addNewRent: (state, action: PayloadAction<any>) => {
            state.myRents.push(action.payload);
        },
    },

    extraReducers: (builder) => {
        // אם הפעולה הצליחה
        builder.addCase(addNewRent.fulfilled, (state, action: PayloadAction<Rent>) => {
            //הוספה למערך הדירות הגדול
            state.rents.push(action.payload);
        });
            builder.addCase(getMyRents.fulfilled, (state, action: PayloadAction<Array<Rent>>) => {
                //קבלת מערך דירות אישי ע"פ מזהה
                state.myRents=action.payload;
        });
        builder.addCase(getRents.fulfilled, (state, action: PayloadAction<Array<Rent>>) => {
            //קבלת מערך דירות כללי
            state.rents=action.payload;
    })

    }


})

// export const getMyRents  = rentSlice.actions
// export const {addRent}=rentSlice.actions;
export default rentSlice.reducer
