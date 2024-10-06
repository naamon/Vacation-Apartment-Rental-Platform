
import { CardMedia } from '@mui/material';
import { color } from '@mui/system';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic5 from '../pictures/pic5.jpg'
import p1 from '../imagesForCards/p1.jpg'
import p2 from '../imagesForCards/p2.jpg'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { updateCurrentApartment } from './apartmentSlice';
import { Apartment } from '../../models/Apartment';
import { useEffect } from 'react';




function CardApartment(props: any) {
    const dispatch: AppDispatch = useDispatch();
    const CurrentApartment = useSelector((state: RootState) => state.apartment.currentApartment);
    const { apartment } = props;
    const navigate = useNavigate()
   const updateThisApartment = () => {
        dispatch(updateCurrentApartment(apartment))
        navigate('/showapartment')
    }

    return (
        <div id="cardPage">
            <Card style={{ width: '15rem' }} id="card">
                <Card.Img variant="top" src={"/imagesForCards/" + apartment.img} />
                <Card.Body>

                    <Card.Title>{apartment.name}</Card.Title>
                    <Card.Text>
                        {apartment.price}$ for night
                        <br/>
                        {apartment.available?'available':'not-available'}
                    </Card.Text>
                    {apartment.available&&<Button onClick={updateThisApartment} variant="primary" style={{ backgroundColor: 'darkcyan' }}>I'm interested!
                    </Button>}
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardApartment