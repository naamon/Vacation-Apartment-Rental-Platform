import { CardMedia } from "@mui/material";
import { color } from "@mui/system";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { putApartment } from "../apartment/apartmentSlice";
import { Apartment } from "../../models/Apartment";
import { useEffect } from "react";

function HistoryRentCard(props: any) {
  const dispatch: AppDispatch = useDispatch();


  const { apartment } = props;
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
    };
}, [apartment.available])


  const updateThisApartment = () => {
  const tempApartment: Apartment = {
      id: apartment?.id,
      category: apartment?.category,
      rents: apartment?.rents,
      name: apartment?.name,
      description: apartment?.description,
      numOfRooms: apartment?.numOfRooms,
      numOfBeds: apartment?.numOfBeds,
      pool: apartment?.pool,
      price: apartment?.price,
      available: true,
      img: apartment?.img,

    };
    dispatch(putApartment(tempApartment))
    navigate('/feedbeck')
  };

  return (
    <div id="cardPage">
      <Card style={{ width: "15rem" }} id="card">
        <Card.Img variant="top" src={"/imagesForCards/" + apartment.img} />
        <Card.Body>
          <Card.Title>{apartment.name}</Card.Title>
          <Card.Text>
          Total paid: {props.days*apartment.price}$ 
            <br />
          </Card.Text>
          {!apartment.available && (
            <Button
              onClick={updateThisApartment}
              variant="primary"
              style={{ backgroundColor: "darkcyan" }}
              
            >
              return apartment
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default HistoryRentCard;
