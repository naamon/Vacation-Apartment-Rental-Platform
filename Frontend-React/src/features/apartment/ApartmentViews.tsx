import { useDispatch, useSelector } from "react-redux";
import { getApartments } from "./apartmentSlice";
import { useEffect } from "react";
import { getAllApartments } from "../../services/apartment";
import { AppDispatch, RootState, store } from "../../app/store";
import CardApartment from "./CardApartment";
import { Apartment } from "../../models/Apartment";
import User from "../../models/User";

// import type { RootState } from '../../app/store'
const ApartmentViews = (props: any) => {
  const MinCurrent = useSelector((state: RootState) => state.user.minVal);
  const MaxCurrent = useSelector((state: RootState) => state.user.maxVal);
  const dispatch: AppDispatch = useDispatch();
  const apartments = useSelector(
    (state: RootState) => state.apartment.apartments
  );
  const currentCategory = useSelector(
    (state: RootState) => state.category.currentCategory
  );
  const currentUser: User = useSelector(
    (state: RootState) => state.user.currentUser
  );
  const status = useSelector((state: RootState) => state.apartment.status);
  useEffect(() => {
    dispatch(getApartments());
  }, []);
  // dispatch(getApartments());
  return (
    <>
      {
        
        currentCategory == 0
          ? apartments &&
            apartments.filter((x)=>x.price>MinCurrent&&x.price<MaxCurrent).
            map((a: Apartment) => (
              <CardApartment apartment={a}></CardApartment>
            ))
          : apartments &&
            apartments
              .filter(
                (x) => x.price > MinCurrent && x.price < MaxCurrent
              )
              .filter((a: Apartment) => a.category?.id == currentCategory)
              .map((a: Apartment) => (
                <CardApartment apartment={a}></CardApartment>
              ))
        // resFilter()
      }
    </>
  );
};
export default ApartmentViews;
