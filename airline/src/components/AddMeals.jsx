import React from 'react';

const AddMeals = () => {
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
            <path d="M5 3h14v2H5zm14 0v2m0 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7m14 0v2M5 7v8"></path>
            <path d="M10 9h4m-4 4h4m-4-2h4"></path>
          </svg>
          Meals
        </h3>
        <div className="section-description">
          You have successfully added meals for your trip. Below is a summary of your selection:
        </div>
        <div className="section-details">
          KHI to PEW <br />
          3 X Chicken Pepperoni Sandwich with water
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

export default AddMeals;
