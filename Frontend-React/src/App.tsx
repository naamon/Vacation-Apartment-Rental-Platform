import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {Routing} from './Routing'
import ResponsiveAppBar from './Navbar/GuestNavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import  UncontrolledExample  from './Components/Carusael';
import { getAllUsers } from './services/user';
import { AppDispatch, RootState } from './app/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './features/user/userSlice';

function App() {
  const [showSlide, setShowSlide] = React.useState(true)
  const dispatch: AppDispatch = useDispatch();
  const Users = useSelector((state: RootState) => state.user.users);

  
useEffect(() => {
  dispatch(getUsers());
  return () => {
  };
}, [])

  return (
    <div className='App'>
      {/* <GuestNavbar></GuestNavbar> */}
      <ResponsiveAppBar showSlide={showSlide} setShowSlide={setShowSlide}></ResponsiveAppBar>
      <Routing showSlide={showSlide} setShowSlide={setShowSlide}></Routing>
      {/* <UncontrolledExample></UncontrolledExample> */}
      {/* <UncontrolledExample showSlide={showSlide} setShowSlide={setShowSlide}></UncontrolledExample> */}
      {/* {setShowSlide(true)} */}
      {showSlide?<UncontrolledExample/>:<h1></h1>}
    </div>
    
  );
}

export default App;
