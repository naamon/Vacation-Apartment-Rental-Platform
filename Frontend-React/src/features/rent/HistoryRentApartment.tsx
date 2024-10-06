import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import CardApartment from "../apartment/CardApartment";
import HistoryRentCard from "./HistoryRentCard";
import { Rent } from "../../models/Rent";
import { getMyRents, getRents } from "./rentSlice";



export function HistoryRentApartment() {
    const CurrentUser = useSelector((state: RootState) => state.user.currentUser);
    const rents = useSelector((state: RootState) => state.rent.rents);
    const apartments = useSelector((state: RootState) => state.apartment.apartments);

    const dispatch: AppDispatch = useDispatch();


    useEffect(() => {
        //לא צריך לשלוח מזהה משתמש כי נשלח בסלייס
        // dispatch(getMyRents());
        dispatch(getRents());
        return () => {
        };
    }, [])



    return (
        < >
        <div style={{}}>
            {rents.filter((r:Rent)=>r.user?.id==CurrentUser.id).map((r:Rent)=><HistoryRentCard days={r.numberOfDays} apartment={r.apartment} /> ) }
       </div>
        </>
    )
}