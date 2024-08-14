import React from 'react';

const AddSeats = () => {
  return (
    <div className="extras-section">
      <div className="section-left">
        <h3 className="section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="icon"
            viewBox="0 0 24 24"
          >
            <path d="M6 22V9a4 4 0 0 1 8 0v13m2 0v-6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6"></path>
            <path d="M13 12h6"></path>
            <circle cx="16" cy="9" r="1"></circle>
          </svg>
          Seats
        </h3>
        <div className="section-description">
          You have successfully added seats for your trip. Below is a summary of your selection:
        </div>
        <div className="section-details">
          KHI to PEW <br />
          4C, 5D, 2E
        </div>
      </div>
      <div className="section-right">
        <div className="extras-price">PKR 2100</div>
        <button className="edit-selection-button">
          <span className="icon">✏️</span>Edit Selection
        </button>
      </div>
    </div>
  );
};

export default AddSeats;
