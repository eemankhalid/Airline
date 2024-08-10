import React, { useState } from "react";
import Hero from "../components/Hero";
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
    }
];

const datesData = [
    { day: "Monday", date: "10 Aug 2024", price: "PKR 128718" },
    { day: "Tuesday", date: "11 Aug 2024", price: "PKR 130000" },
    { day: "Wednesday", date: "12 Aug 2024", price: "PKR 125000" },
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
    const image = (
        <img
            src="src/assets/img/banner-7.png"
            alt="Group Travel"
            className="hero-image"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
    );

    // Filter flights based on the selected date
    const filteredFlights = flightsData.filter((flight) => {
        // Add logic to filter flights based on the selected date
        return true; // Placeholder: You need to add date-related filtering logic here
    });
    return (
        <>
            <Hero
                img={image}
                style={{ maxWidth: '900px', width: '100%', height: 'auto', objectFit: 'cover' }}
                h4={'Book Your Flight with Ease'}
                h2={'Effortless Travel Planning'}
                p={"Booking with Infinity Wings is a breeze. Choose your destination, select your flight, and enjoy a seamless experience tailored to your needs. Ready to fly? Let’s get you on board"}
            />

            {/* Add DateCarousel at the top */}
            <DateCarousel
                dates={datesData}
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
            />
            <div className="select-flight">
                <h1>Select your departing flight from Lahore to Istanbul</h1>
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
