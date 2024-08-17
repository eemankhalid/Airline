import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FlightHeader from '../components/FlightHeader';
import AddSeats from '../components/AddSeats';
import AddMeals from '../components/AddMeals';
import AddBaggage from '../components/AddBaggage';
import '../css/AddMeals.css';
import '../css/AddSeats.css';
import '../css/AddExtras.css';

const AddExtrasPages = () => {
  const [activeComponent, setActiveComponent] = useState('extras');
  const navigate = useNavigate(); // Initialize useNavigate

  const renderComponent = () => {
    switch (activeComponent) {
      case 'addSeats':
        return <AddSeats />;
      case 'addMeals':
        return <AddMeals />;
      case 'addBaggage':
        return <AddBaggage />;
      default:
        return renderExtrasPage();
    }
  };

  const renderExtrasPage = () => (
    <div className="extras-container">
      <h2 className="extras-title">Select extras for your trip</h2>
      <br />
      <div className="extras-section">
        <div className="section-left">
          <h3 className="section">
            {/* Seats SVG Icon */}
            Seats
          </h3>
          <div className="section-description">
            Please select your preferred seat from the available options to enhance your comfort during the flight.
          </div>
          <div className="section-details"></div>
        </div>
        <div className="section-right">
          <button
            className="edit-selection-button1"
            onClick={() => setActiveComponent('addSeats')}
          >
            <span className="icon">✏️</span>Select
          </button>
        </div>
      </div>

      <div className="extras-section">
        <div className="section-left">
          <h3 className="section">
            {/* Meals SVG Icon */}
            Meals
          </h3>
          <div className="section-description">
            You have successfully added meals for your trip. Below is a summary of your selection:
          </div>
          <div className="section-details"></div>
        </div>
        <div className="section-right">
          <button
            className="edit-selection-button2"
            onClick={() => setActiveComponent('addMeals')}
          >
            <span className="icon">✏️</span>Select
          </button>
        </div>
      </div>

      <div className="extras-section">
        <div className="section-left">
          <h3 className="section">
            {/* Baggage SVG Icon */}
            Baggage
          </h3>
          <div className="section-description">
            We’ve saved you time and selected a baggage allowance for you. You can edit the selection if you wish.
          </div>
          <div className="section-details"></div>
        </div>
        <div className="section-right">
          <button
            className="edit-selection-button3"
            onClick={() => setActiveComponent('addBaggage')}
          >
            <span className="icon">✏️</span>Select
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="extras-page">
      <br />
      <FlightHeader />
      <br />
      {renderComponent()}
    </div>
  );
};

export default AddExtrasPages;
