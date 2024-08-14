import React from 'react';


const AddBaggage = () => {
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
            <rect x="3" y="7" width="18" height="13" rx="2" ry="2"></rect>
            <path d="M8 7V4a4 4 0 0 1 8 0v3"></path>
          </svg>
          Baggage
        </h3>
        <div className="section-description">
          We’ve saved you time and selected a baggage allowance for you. You can edit the selection if you wish.
        </div>
        <div className="section-details">
          KHI to PEW <br />
          3 X Hand baggage, 3 X 23 Kg 1 Piece Free
        </div>
      </div>
      <div className="section-right">
        <div className="extras-price">PKR 0</div>
        <button className="edit-selection-button">
          <span className="icon">✏️</span>Edit Selection
        </button>
      </div>
    </div>
  );
};

export default AddBaggage;
