import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcaseRolling, faUtensils, faChair, faTv } from '@fortawesome/free-solid-svg-icons';

const FlightOptions = () => {
  return (
    <>
     <br/><br/>
    <div className="flight-options">
      <h2>Get more from our great flight options</h2>
      
      <div className="options-container">
        <div className="option">
          <div className="icon-container">
            <FontAwesomeIcon icon={faSuitcaseRolling} className="icon" />
          </div>
          <div className="option-content">
            <h3>Reserve your baggage in advance.</h3>
            <p>Reserve your baggage allowance now and save up to 90% on airport baggage fees.</p>
          </div>
        </div>
        
        <div className="option">
          <div className="icon-container">
            <FontAwesomeIcon icon={faUtensils} className="icon" />
          </div>
          <div className="option-content">
            <h3>Choose your preferred meal in advance.</h3>
            <p>Pre-order from our Sky Café menu and enjoy priority service on your flight.</p>
          </div>
        </div>
        
        <div className="option">
          <div className="icon-container">
            <FontAwesomeIcon icon={faChair} className="icon" />
          </div>
          <div className="option-content">
            <h3>Pre-select your preferred seat</h3>
            <p>Whether it's a window or aisle, select your seat before your flight to ensure it's reserved just for you.</p>
          </div>
        </div>
        
        <div className="option">
          <div className="icon-container">
            <FontAwesomeIcon icon={faTv} className="icon" />
          </div>
          <div className="option-content">
            <h3>In-flight streaming services</h3>
            <p>Enjoy a diverse range of entertainment by streaming directly to your device!</p>
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
    </>
  );
}

export default FlightOptions;
