import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { addUser, getAllUsers } from '../../services/user';
import User from '../../models/User';
import { Rent } from '../../models/Rent';



export interface UserState {
    users: Array<User>,
    currentUser: User,
    status: boolean,  
    myRents: Array<Rent>,
    minVal:number,
    maxVal:number,
}

export const addNewUser1 = createAsyncThunk("addNewUser1", async (user: User) => {
    const { data } = await addUser(user)
    return data;
})



export const getUsers = createAsyncThunk("getUsers", async () => {
    const { data } = await getAllUsers()
    return data;
})

const initialState: UserState = {
    users: [],
    myRents:[],
    currentUser: { firstName: "israel", id: 0, lastName: "israeli", mail: "israel@gmail.com", password: "", phoneNumber: "0500000000", status: 0},
    status: true,
    minVal:100,
    maxVal:1000
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<any>) => {
            state.currentUser = action.payload;
        },
        updateMinVal: (state, action: PayloadAction<number>) => {
            state.minVal = action.payload;
        },
        updateMaxVal: (state, action: PayloadAction<number>) => {
            state.maxVal = action.payload;
        },
        // addRent: (state, action: PayloadAction<Rent>) => {
        //     state.myRents.push(action.payload);
        // },
    },


    extraReducers: (builder) => {
        // אם הפעולה הצליחה
        builder.addCase(addNewUser1.fulfilled, (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            state.users.push(action.payload)
        });
        builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<Array<User>>) => {
            state.users = action.payload;
        })
    }


})

export const { updateUser,updateMaxVal,updateMinVal} = userSlice.actions

export default userSlice.reducer
