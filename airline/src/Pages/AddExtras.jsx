import React from 'react';
import FlightHeader from '../components/FlightHeader';
import AddBaggage from '../components/AddBaggage';
import AddMeals from '../components/AddMeals';
import AddSeats from '../components/AddSeats';


const AddExtrasPages = () => {
  return (
    <div className="extras-page">
      <br></br>
      <FlightHeader />
      <br></br>
      <button className="paybtn">Continue to Payment</button>
      <div className="extras-container">
        
        <h2 className="extras-title">Select extras for your trip</h2>


        <br></br>
        <AddSeats />
        <AddMeals />
        <AddBaggage />
       
      </div>
    </div>
  );
};

export default AddExtrasPages;
