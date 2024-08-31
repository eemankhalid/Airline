import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Booked.css';

const Booked = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="boarding-passes">
        <div className="boarding-pass-headers">
          <h1>Congratulations</h1>
        </div>
        <div className="boarding-pass-detailss">
          <div className="details-left">
            <p><strong>Your flight has been booked successfully!</strong></p>
            <p>We wish you a pleasant journey and a wonderful stay.</p>
            <p>Thank you for choosing our service!</p>
     
          </div>
        </div>
        <div className="boarding-pass-route">
        <div className="barcodes"></div>
          <span className="plane-icon">✈</span>
        </div>
        <div className="boarding-pass-footer">
          <Link to="/" className="home-button">Go to Home</Link>
        </div>
      </div>
    </>
  );
};

export default Booked;
