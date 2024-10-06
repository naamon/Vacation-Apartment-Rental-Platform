import { Apartment } from "../../models/Apartment"
import { deleteApartment, getAllApartments, updateApartment, addApartment } from "../../services/apartment"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

//משתנים משותפים
export interface ApartmentState {
    apartments: Array<Apartment>,
    status: boolean,
    currentApartment:Apartment
}
//אתחול המשתנים
const initialState: ApartmentState = {
    apartments: [],
    status: false,
    currentApartment:{id:0,price:100}
}

export const getApartments = createAsyncThunk("getApartment", async () => {
    const { data } = await getAllApartments();
    return data;
})

export const createApartment = createAsyncThunk("createApartment", async (apartment: Apartment) => {
    const { data } = await addApartment(apartment)
    return data;
})


export const deleteApartmentById = createAsyncThunk(
    "apartment/delete",
    async (id: number) => {
        await deleteApartment(id);
        return id;
    }
)

export const putApartment=createAsyncThunk(
    "putApartment",
    async(apartment:Apartment)=>{
        console.log("hey now")
        const {data}=await updateApartment(Number(apartment.id),apartment);
        return data;
    }
)

export const apartmentSlice = createSlice({
    name: 'apartment',
    initialState,
    reducers: {
        addApartment: (state, action: PayloadAction<Apartment>) => {
            state.apartments.push(action.payload)
        },
        updateCurrentApartment: (state, action: PayloadAction<Apartment>) => {
            state.currentApartment = action.payload;
        }
        
    },


    // //הפעולות שעושים אחרי הCRATEASYNCTHUNK
    extraReducers: (builder) => {
        //אם הפעולה הצליחה
        builder.addCase(getApartments.fulfilled, (state, action: PayloadAction<Array<Apartment>>) => {
            state.apartments = action.payload;

        });
        builder.addCase(putApartment.fulfilled, (state, action: PayloadAction<Apartment>) => {
            state.currentApartment = action.payload;
            state.status = false;
        });
        builder.addCase(createApartment.fulfilled,(state,action:PayloadAction<Apartment>)=>{
            console.log("succes")
            state.apartments.push(action.payload)
        }
        );
        builder.addCase(createApartment.rejected,(state,action:PayloadAction<any>)=>{
            console.log("reject")
            console.log(action.payload)
        }
        );

        //      //הפעולה נכשלה
             builder.addCase(getApartments.rejected,(state,action:PayloadAction<any>)=>{})

            //  builder.addCase(deleteApartment.fullfilled,(state,action:PayloadAction<any>)=>{
            //     let apartments=state.apartments.filter(x=>x.id!==action.payload)
            //     state.apartments=apartments
            //  })
    }

})
export const {updateCurrentApartment}=apartmentSlice.actions;
export default apartmentSlice.reducer;
