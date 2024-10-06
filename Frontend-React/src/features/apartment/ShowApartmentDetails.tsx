import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { putApartment } from "./apartmentSlice";
import { addNewRent } from "../rent/rentSlice";
import { Apartment } from "../../models/Apartment";
import { Rent } from "../../models/Rent";
import "../../ShowApartmentDetails.css";
export function ShowApartmentDetails(props: any) {
  const CurrentUser = useSelector((state: RootState) => state.user.currentUser);
    const [sum,setSum]=useState<Number>(0);

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const CurrentApartment = useSelector(
    (state: RootState) => state.apartment.currentApartment
  );

  props.setShowSlide(false);
  const [days, setDays] = useState(0);

  const getDays = (e: any) => {
    setDays(e.target.value);
    console.log(days)
    setSum(days*Number(CurrentApartment.price))
    console.log(sum)
  };

  useEffect(() => {
    setSum(days*Number(CurrentApartment.price))

    return () => {
    };
  }, [sum, days])
  
  

  //create temp rent to add to the big array of rents
  //its not work
  const addCurrentRent = () => {
    if (days == 0) {
      alert('please choose days for rent')
      navigate("/ShowApartment");
    } else {
      const newRent: Rent = {
        id: 0,
        user: CurrentUser,
        apartment: CurrentApartment,
        numberOfDays: days,
      };
      dispatch(addNewRent(newRent));
      navigate('/thanks')

      //create temp apartment to update the available
      const tempApartment: Apartment = {
        id: newRent.apartment?.id,
        category: newRent.apartment?.category,
        rents: newRent.apartment?.rents,
        name: newRent.apartment?.name,
        description: newRent.apartment?.description,
        numOfRooms: newRent.apartment?.numOfRooms,
        numOfBeds: newRent.apartment?.numOfBeds,
        pool: newRent.apartment?.pool,
        price: newRent.apartment?.price,
        available: false,
        img: newRent.apartment?.img,
      };

      //update apartment in redux and database
      dispatch(putApartment(tempApartment));
    }
  };
  return (
    <>     

    <div className="container">
      {/* <!-- Left Column / Headphones Image --> */}
      <div className="left-column">
        {/* <!-- //התמונה הראשית --> */}
        <img
          data-image="red"
          className="active"
          src={"/imagesForCards/" + CurrentApartment.img}
        />
      </div>

      {/* <!-- Right Column --> */}
      <div className="right-column">
        {/* <!-- Product Description --> */}
        <div className="product-description">
          <span>{CurrentApartment.category?.name}</span>
          <h1>{CurrentApartment.name}</h1>
          <p>{CurrentApartment.description} </p>
        </div>

        {/* <!-- Product Configuration --> */}
        <div className="product-configuration">
          {/* <!-- Product Color --> */}
          <div className="product-color">
            <span>pool: {CurrentApartment.pool?'yes':'no'}</span>
            <br />
            <span>num of rooms: {CurrentApartment.numOfRooms?.toString()}</span>
            <br />
            <span>num of beds: {CurrentApartment.numOfBeds?.toString()}</span>
            <br />
            <span>price: {CurrentApartment.price?.toString()}$ for night</span>
            <div className="color-choose"></div>
          </div>

          {/* <!-- Cable Configuration --> */}
          <div className="cable-config">
            <span>enter num of days</span>
            <br/>
            <input type={"number"} onChange={getDays}></input>

            <div className="cable-choose"></div>

            {/* <a href="#">checke avalabail</a> */}
          </div>
        </div>

        {/* <!-- Product Pricing --> */}
        <div className="product-price">
          <span>total:{sum.toString()}$ </span>
          {/* <a href="#" className="cart-btn">
            Order now
          </a> */}
          {CurrentUser.password != "" ? (
            <button onClick={addCurrentRent} className="btn btn-outline-dark">
              Rent Now
            </button>
          ) : (
            <h5>please login</h5>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
