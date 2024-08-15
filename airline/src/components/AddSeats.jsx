import React, { useState } from 'react';
import FlightHeader from '../components/FlightHeader';
import AddExtras from '../Pages/AddExtras'; // Adjust the import path as needed

const AddSeats = () => {
  const [activeComponent, setActiveComponent] = useState('seats');
  const [selectedSeats, setSelectedSeats] = useState({
    "Mrs. Anna Ahad": "4C",
    "Ms. Anna Ahad": "5D",
    "Mrs. Anna Ahad (2)": "2E",
  });

  const seatMap = [
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    // Add more rows as needed
  ];

  const handleSeatClick = (rowIndex, seatIndex) => {
    const selectedSeat = `${rowIndex + 1}${seatMap[rowIndex][seatIndex]}`;
    console.log("Seat clicked:", selectedSeat);

    const currentPassenger = "Mrs. Anna Ahad";
    setSelectedSeats((prevSeats) => ({
      ...prevSeats,
      [currentPassenger]: selectedSeat,
    }));
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
            You have successfully added seats for your trip. Below is a summary of your selection:
          </div>
          <div className="section-details">
            KHI to PEW <br />
            4C, 5D, 2E
          </div>
        </div>
        <div className="section-right">
          <div className="extras-price">PKR 2100</div>
          <button
            className="edit-selection-button1"
            onClick={() => setActiveComponent('seats')}
          >
            <span className="icon">✏️</span>Edit Selection
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
          <div className="section-details">
            KHI to PEW <br />
            3 X Chicken Pepperoni Sandwich with water
          </div>
        </div>
        <div className="section-right">
          <div className="extras-price">PKR 0</div>
          <button
            className="edit-selection-button2"
            onClick={() => setActiveComponent('addMeals')}
          >
            <span className="icon">✏️</span>Edit Selection
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
          <div className="section-details">
            KHI to PEW <br />
            3 X Hand baggage, 3 X 23 Kg 1 Piece Free
          </div>
        </div>
        <div className="section-right">
          <div className="extras-price">PKR 0</div>
          <button
            className="edit-selection-button3"
            onClick={() => setActiveComponent('addBaggage')}
          >
            <span className="icon">✏️</span>Edit Selection
          </button>
        </div>
      </div>
    </div>
  );

  const renderSeatSelection = () => (
    <div className="seat-selection-container">
      <div className="seat-selection-left">
        <h2>Select seats for your trip</h2>
        <p>Karachi to Peshawar</p>
        <p>Flight 9P865</p>
         
        <div className="passenger-list">
          <h3>Select passenger from the list below</h3>
          <ul>
            {Object.entries(selectedSeats).map(([name, seat]) => (
              <li key={name}>
                <div className="passenger-item">
                  <span>{name}</span>
                  <span className="seat-number">{seat}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="seat-map-legend">
          <h4>Seatmap Legend</h4>
          <div className="legend-item">
            <span className="legend-color available"></span>
            <span>Available</span>
          </div>
          <div className="legend-item">
            <span className="legend-color occupied"></span>
            <span>Occupied</span>
          </div>
          <div className="legend-item">
            <span className="legend-color selected"></span>
            <span>Selected</span>
          </div>
        </div>
      </div>

      <div className="seat-selection-right">
        <div className="seat-map">
          {seatMap.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {row.map((seat, seatIndex) => {
                const seatNumber = `${rowIndex + 1}${seat}`;
                const isSelected = Object.values(selectedSeats).includes(seatNumber);

                return (
                  <div
                    key={seatIndex}
                    className={`seat ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(rowIndex, seatIndex)}
                  >
                    {seatNumber}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="seat-summary">
          <h4>Seats</h4>
          <ul>
            {Object.entries(selectedSeats).map(([name, seat]) => (
              <li key={name}>
                {name} - {seat}
              </li>
            ))}
          </ul>
          <div className="total-price">PKR 2100</div>
          <button className="confirm-selection-btn">Confirm selection</button>
        
          <button
            className="back-button"
            onClick={() => setActiveComponent('add-extras')} // Set component state to show extras page
          >
            Back to Extras
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <br />
      <FlightHeader />
      <br />
      {activeComponent === 'seats' ? renderSeatSelection() : renderExtrasPage()}
    </>
  );
};

export default AddSeats;
