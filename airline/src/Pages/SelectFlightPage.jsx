import React, { useState } from "react";
import DateCarousel from "../components/DateCarousel";


const flightsData = [
    // Dummy data representing flights
    {
        id: 1,
        departureTime: "13:05",
        arrivalTime: "00:20 (+1)",
        duration: "13 hour(s) 15 minute(s)",
        stops: 1,
        airline: "Fly Jinnah",
        flightCode: "9P500",
        price: "PKR 128718",
        operatedBy: "Air Arabia",
    },
    {
        id: 2,
        departureTime: "13:05",
        arrivalTime: "13:20 (+2)",
        duration: "26 hour(s) 15 minute(s)",
        stops: 1,
        airline: "Fly Jinnah",
        flightCode: "9P500",
        price: "PKR 128718",
        operatedBy: "Air Arabia",
    },
    {
        id: 3,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "18 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Fly Jinnah",
        flightCode: "9P502",
        price: "PKR 128718",
        operatedBy: "Air Arabia",
    },
    {
        id: 3,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "18 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Fly Jinnah",
        flightCode: "9P502",
        price: "PKR 128718",
        operatedBy: "Air Arabia",
    },
    {
        id: 3,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "18 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Fly Jinnah",
        flightCode: "9P502",
        price: "PKR 128718",
        operatedBy: "Air Arabia",
    },
    {
        id: 4,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "18 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Fly Jinnah",
        flightCode: "9P502",
        price: "PKR 128718",
        operatedBy: "Air Arabia",
    },
    {
        id: 5,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "18 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Fly Jinnah",
        flightCode: "9P502",
        price: "PKR 128718",
        operatedBy: "Air Arabia",
    },
    {
        id: 6,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "18 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Fly Jinnah",
        flightCode: "9P502",
        price: "PKR 128718",
        operatedBy: "Air Arabia",
    },
    {
        id: 7,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "18 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Fly Jinnah",
        flightCode: "9P502",
        price: "PKR 128718",
        operatedBy: "Air Arabia",
    },
    {
        id: 8,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "18 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Fly Jinnah",
        flightCode: "9P502",
        price: "PKR 128718",
        operatedBy: "Air Arabia",
    },
];

const datesData = [
    { day: "Monday", date: "10 Aug 2024", price: "PKR 128718" },
    { day: "Tuesday", date: "11 Aug 2024", price: "PKR 130000" },
    { day: "Wednesday", date: "12 Aug 2024", price: "PKR 125000" },
    { day: "Thursday", date: "13 Aug 2024", price: "PKR 128720" },
    { day: "Friday", date: "14 Aug 2024", price: "PKR 130718" },
    { day: "Saturday", date: "15 Aug 2024", price: "PKR 289718" },
    { day: "Sunday", date: "16 Aug 2024", price: "PKR 128720" },
    { day: "Monday", date: "17 Aug 2024", price: "PKR 128918" },
    // Add more dates as needed
];

const SelectFlightPage = () => {
    const [selectedDate, setSelectedDate] = useState(datesData[0].day);
    const [selectedFlight, setSelectedFlight] = useState(null);

    const handleDateSelect = (day) => {
        setSelectedDate(day);
        setSelectedFlight(null); // Clear the selected flight when the date changes
    };

    const handleFlightSelection = (flightId) => {
        setSelectedFlight(flightId);
        // Redirect to booking details page or perform other actions
    };

    return (
        <>
          
             
        

            {/* Add DateCarousel below the navbar */}
           

            <div className="select-flight">
                <h1 style={{marginTop:'50px'}}>Select your departing flight from Lahore to Istanbul</h1>
                <DateCarousel
                dates={datesData}
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
            />
                <div className="flight-options">
                    {flightsData.map((flight) => (
                        <div
                            key={flight.id}
                            className={`flight-option ${selectedFlight === flight.id ? "selected" : ""}`}
                            onClick={() => handleFlightSelection(flight.id)}
                        >
                            <div className="flight-time">
                                <span>{flight.departureTime}</span>
                                <span>{flight.arrivalTime}</span>
                            </div>
                            <div className="flight-details">
                                <p>{flight.duration} / {flight.stops} stop</p>
                                <p>{flight.airline} - {flight.flightCode}</p>
                                <p>Operated by {flight.operatedBy}</p>
                            </div>
                            <div className="flight-price">
                                <p>{flight.price}</p>
                                <button className="book-now">Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default SelectFlightPage;
