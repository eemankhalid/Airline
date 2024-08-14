import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Hero2 from '../components/Hero2';
import FlightBooking from '../components/FlightBooking';
import FlightHeader from "../components/FlightHeader";
import img1 from '../assets/vedio/vdd.mp4';

const BookFlightPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <br /><br />
      <FlightHeader />
      <Hero2 
        pageName="Book Your Flight with Ease" 
        video={img1} // Use the imported video
      />
      <div style={{ margin: '0 auto', width: '98%' }}>
        <FlightBooking />
      </div>
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
}

export default BookFlightPage;
