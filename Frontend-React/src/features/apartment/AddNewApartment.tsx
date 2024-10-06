import { useRef, useState } from "react";
import { Col, FloatingLabel, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";
import { number } from "yup/lib/locale";
import { AppDispatch, RootState } from "../../app/store";
import { Apartment } from "../../models/Apartment";
import { Category } from "../../models/Category";
import { createApartment, updateCurrentApartment } from "./apartmentSlice";


function AddNewApartment(props: any) {
  const dispatch: AppDispatch = useDispatch();
  const apartments = useSelector((state: RootState) => state.apartment.apartments);
  props.setShowSlide(false);
  const navigate=useNavigate()
  const [area, setArea] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rooms, setRooms] = useState(0);
  const [beds, setBeds] = useState(0);
  const [pool, setPool] = useState(false);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(0);
  const areaRef=useRef<HTMLSelectElement>(null)
  const [imageString,setImageString]=useState("")

  //בעת לחיצה על סבמיט
  const validateForm = () => {
    //פונקציה ליצירת משתנה קטגוריה זמני ע"פ הקלט שהתקבל
    const createCategory = (area: any) => {
      Number(area)
      console.log('area')
      console.log(area)
      let tempCategory: Category = { id: 0, name: "" };
      switch (area) {
        case '1':
          tempCategory = { id: area, name: "north" }
          return tempCategory;
        case '2':
          tempCategory = { id: area, name: "south" }
          return tempCategory;
        case '3':
          tempCategory = { id: area, name: "center" }
          return tempCategory;
      }
      return tempCategory;
    }
    //יצירת משתנה דירה זמני לשליחה לפונקציה להוספת דירה
    const tempApartment: Apartment = {
      id: 1,
      name: name,
      description: description,
      numOfRooms: rooms,
      numOfBeds: beds,
      pool: false,
      price: Number(price),
      available: true,
      img:"p"+image+".jpg",
      // category: {id:1, name: "north"}
      category:createCategory(areaRef.current?.value)
      
      //createCategory(area)
    }
    console.log('before dis')
    dispatch(createApartment(tempApartment))
    console.log(tempApartment)
    console.log('after dis')
    
    console.log('after apartmentes')
    console.log(apartments)

    dispatch(updateCurrentApartment(tempApartment))
      navigate('/showapartment')
  };

  // const updateArea = (e: any) => {
  //   e.preventDefault();
  //   setArea(e.target.value);
  //   console.log('changed')
  //   console.log(area)
  // }
  const updateName = (e: any) => {
    e.preventDefault();
    setName(e.target.value);
  }
  const updateDescription = (e: any) => {
    e.preventDefault();
    setDescription(e.target.value);
  }
  const updateRooms = (e: any) => {
    e.preventDefault();
    setRooms(e.target.value);
  }
  const updateBeds = (e: any) => {
    e.preventDefault();
    setBeds(e.target.value);
  }
  const updatePool = (e: any) => {
    e.preventDefault();
    setPool(e.target.value);
  }
  const updatePrice = (e: any) => {
    e.preventDefault();
    setPrice(e.target.value);
  }
  const updateImage = (e: any) => {
    e.preventDefault();
    setImage(e.target.value);
  }

  return (
    <>
      <br></br>
      <h1>Add apartment</h1>
      <div id="addApartmentForm">
        <Form onSubmit={validateForm}>
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Name"
                onChange={updateName}
              >
                <Form.Control type="text" placeholder="" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label={"Area"}>
                <Form.Select
                  aria-label="Floating label select example"
                  // onChange={updateArea} 
                  ref={areaRef}
                >
                  <option value="1">North</option>
                  <option value="2">South</option>
                  <option value="3">Center</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <br />
          <FloatingLabel controlId="floatingTextarea2" label=" Description">
            <Form.Control
              as="textarea"
              placeholder="write everything you know about your apartment"
              style={{ height: "100px" }}
              onChange={updateDescription}
              maxLength={254}
              

            />
          </FloatingLabel>
          <br></br>
          <Row className="g-3">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Rooms"
                onChange={updateRooms}
              >
                <Form.Control type="number" placeholder="num of rooms" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Beds"
                onChange={updateBeds}
              >
                <Form.Control type="number" placeholder="num of beds" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Price for night"
                onChange={updatePrice}
              >
                <Form.Control type="number" placeholder="Price for night" min={101} max={1000}/>
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <FloatingLabel controlId="floatingInputGrid" label="choose number of image"
            onChange={updateImage}
          >
            <Form.Control type="number" placeholder="image" min={1} max={18} />
          </FloatingLabel>
          <br />
          <Form.Check
            type="checkbox"
            id="custom-switch"
            label="Has pool"
            onChange={updatePool}

          />
          <Button type="submit" >
            Add apartment
          </Button>
        </Form>
      </div>
    </>

  );
}

export default AddNewApartment;
