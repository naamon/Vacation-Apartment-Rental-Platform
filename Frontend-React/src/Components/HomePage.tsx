import { Outlet } from "react-router-dom";
// import { GuestNavbar } from "../Navbar/GuestNavbar";
import pic5 from "../pictures/pic5.jpg";
import UncontrolledExample from "./Carusael";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "../app/store";
import ApartmentViews from "../features/apartment/ApartmentViews";
import { updateUser } from "../features/user/userSlice";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { useEffect, useState } from "react";
import User from "../models/User";

export function HomePage(props: any) {
  // const dispatch: AppDispatch = useDispatch();
  const CurrentUser = useSelector((state: RootState) => state.user.currentUser);
  const dispatch: AppDispatch = useDispatch();
  let minPrice=100;
  //  const setMinPrice:Function =(value:number)=> minPrice=value;
  let maxPrice=1000;
  // const setMaxPrice:Function =(value:number)=>{maxPrice=value;("in max"+maxPrice)} 
  useEffect(() => {
    // dispatch(updateUser(props.currentUser));
    // return () => {};
  }, []);

  return (
    <>
      {props.setShowSlide(false)}
      <Form
        priceDetails={{
          maxPrice: maxPrice,
          minPrice: minPrice,
          // setMaxPrice: setMaxPrice,
          // setMinPrice: setMinPrice,
        }}
      ></Form>
      <div id="listCard">
        <ApartmentViews />
      </div>
    </>
  );
}
