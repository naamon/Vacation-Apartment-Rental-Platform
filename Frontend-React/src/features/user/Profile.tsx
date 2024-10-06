
import '../../profile.css';
import profile from '../../pictures/profile.jpg'
import React, { useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { HistoryRentApartment } from '../rent/HistoryRentApartment';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Profile(props: any) {
  // remove the slide
  props.setShowSlide(false)
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate()
  const CurrentUser = useSelector((state: RootState) => state.user.currentUser);
  return (
    <>
      <div >
      <section className="section about-section gray-bg" id="about">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="about-text go-to">
                  <h3 className="dark-color">Hello {CurrentUser.firstName}</h3>
                  <h6 className="theme-color lead"> We are happy to see you again with us</h6>
                  {/* <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p> */}
                  <div className="row about-list">
                    <div className="col-md-6">
                      <div className="media">
                        <label>first name</label>
                        <p>{CurrentUser.firstName}</p>
                      </div>
                      <div className="media">
                        <label>last name</label>
                        <p>{CurrentUser.lastName}</p>
                      </div>
                      <div className="media">
                        <label>phone</label>
                        <p>{CurrentUser.phoneNumber}</p>
                      </div>
                      <div className="media">
                        <label>email</label>
                        <p>{CurrentUser.mail}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      
      <br /><br /><br /><br /><br /><br /> <br /><br />  
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-avatar">
                  <img src={profile} id="ProfileImage"/>
                  <br></br>
                  <br></br>
                  <h4>Previous rentals:</h4> 
                </div>
              </div>
            </div>
            {CurrentUser.status==1&&<div className="counter">
              <button onClick={()=>{navigate('/AddNewApartment')}}>add your apartment</button>
            </div>}
          </div>
        </section>
      </div>
      <div id="historyRent">
        <HistoryRentApartment/>
      </div>
    </>
  );
}