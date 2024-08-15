import React, { useState, useEffect } from 'react';
import FlightHeader from '../components/FlightHeader';
import AddMeals from './AddMeals'; // Import AddMeals component

const AddSeats = () => {
  const [bookingDetails, setBookingDetails] = useState({});
  const [selectedSeats, setSelectedSeats] = useState({
    "Mrs. Anna Ahad": "4C",
    "Ms. Anna Ahad": "5D",
    "Mrs. Anna Ahad (2)": "2E",
  });
  const [activeComponent, setActiveComponent] = useState('seats');
  const [currentPassenger, setCurrentPassenger] = useState(null); // Track the selected passenger

  useEffect(() => {
    const storedBookingDetails = sessionStorage.getItem('bookingDetails');
    if (storedBookingDetails) {
      setBookingDetails(JSON.parse(storedBookingDetails));
    }
  }, []);

  const seatMap = [
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
  ];

  const handleSeatClick = (rowIndex, seatIndex) => {
    if (!currentPassenger) {
      alert("Please select a passenger first.");
      return;
    }

    const selectedSeat = `${rowIndex + 1}${seatMap[rowIndex][seatIndex]}`;
    console.log("Seat clicked:", selectedSeat);

    setSelectedSeats((prevSeats) => ({
      ...prevSeats,
      [currentPassenger]: selectedSeat,
    }));
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'add-meals':
        return <AddMeals />;
      default:
        return (
          <div className="seat-selection-container">
            <div className="seat-selection-left">
              <h2>Select seats for your trip</h2>
              <p>{bookingDetails.fromCountry} to {bookingDetails.toCountry}</p>
              <div className="passenger-list">
                <h3>Select passenger from the list below</h3>
                <ul>
                  {Object.entries(selectedSeats).map(([name, seat]) => (
                    <li 
                      key={name} 
                      className={`passenger-item ${currentPassenger === name ? 'active' : ''}`}
                      onClick={() => setCurrentPassenger(name)} // Set the current passenger when clicked
                    >
                      <span>{name}</span>
                      <span className="seat-number">{seat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="seat-map-legend">
                <h2>Seatmap Legend</h2>
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
                <button 
                  className="confirm-selection-btn"
                  onClick={() => setActiveComponent('add-meals')} // Set activeComponent to 'add-meals'
                >
                  Confirm selection
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <br />
      <FlightHeader />
      <br />
      {renderComponent()} {/* Render the active component */}
    </>
  );
};

export default AddSeats;
