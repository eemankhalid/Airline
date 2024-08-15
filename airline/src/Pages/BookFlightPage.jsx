import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Hero2 from '../components/Hero2';
import FlightBooking from '../components/FlightBooking';
import img1 from '../assets/vedio/vdd.mp4';

const BookFlightPage = () => {


  return (
    <div>
  
      <Hero2 
        pageName="Book Your Flight with Ease" 
        video={img1} // Use the imported video
      />
      <div style={{ margin: '0 auto', width: '98%' }}>
        <FlightBooking />
      </div>
  
    </div>
  );
}

export default BookFlightPage;
