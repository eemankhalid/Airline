import React from 'react';
import logo from '../assets/img/sample1.png';  // Import the logo image

const CheckInPage = () => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          max-width: 700px;
          margin: 0 auto;
          padding: 40px 20px;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .logo {
          margin-bottom: 20px;
        }

        .heading {
          font-size: 36px;
          font-weight: bold;
          color: black;
          margin-bottom: 30px;
        }

        .form {
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: left;
          margin-bottom:20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
          display: block;
        }

        .form-group p {
          font-size: 14px;
          color: #777;
          margin-bottom: 8px;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .form-group input[type="date"] {
          padding: 9px;
        }

        .button {
          background-color: black;
          color: white;
          font-size: 18px;
          font-weight: bold;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 20px;
          float: right;
        
        }

        .button:hover {
          background-color: #cc0044;
        }
      `}</style>

      <img src={logo} alt="Travela Logo"
        width="150"
      />
      <h1 className="heading">ONLINE CHECK-IN</h1>
      <div className="form">
        <div className="form-group">
          <label htmlFor="pnr">Reservation Number (PNR)</label>
          <p>Example: 41222222</p>
          <input type="text" id="pnr" />
        </div>
        <div className="form-group">
          <label htmlFor="airport">Departure airport</label>
          <p>Example: Karachi</p>
          <input type="text" id="airport" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of travel</label>
          <p>Example: 20 Aug 2024</p>
          <input type="date" id="date" />
        </div>
        <button className="button">Find booking</button>
      </div>
    </div>
  );
};

export default CheckInPage;
