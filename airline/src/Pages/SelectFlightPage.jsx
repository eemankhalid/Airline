import React, { useState, useEffect, useRef } from "react";
import DateCarousel from "../components/DateCarousel";
import FlightHeader from "../components/FlightHeader";
import FlightPackages from "../components/FlightPackages";

// Dummy data representing flights
const flightsData = [
    // Flights for 10 Aug 2024
    {
        id: 1,
        departureTime: "13:05",
        arrivalTime: "00:20 (+1)",
        duration: "11 hour(s) 15 minute(s)",
        stops: 1,
        airline: "Infinity Wings",
        flightCode: "9P500",
        price: "PKR 128718",
        date: "10 Aug 2024",
    },
    {
        id: 2,
        departureTime: "18:30",
        arrivalTime: "07:00 (+1)",
        duration: "12 hour(s) 30 minute(s)",
        stops: 2,
        stopLocations: ["Dubai (DXB)", "Istanbul (IST)"],
        stopDurations: ["2 hour(s) 10 minute(s)", "1 hour(s) 45 minute(s)"],
        airline: "Infinity Wings",
        flightCode: "FJ300",
        price: "PKR 132000",
        date: "10 Aug 2024",
    },
    // Flights for 11 Aug 2024
    {
        id: 3,
        departureTime: "13:05",
        arrivalTime: "13:20 (+2)",
        duration: "48 hour(s) 15 minute(s)",
        stops: 1,
        airline: "Infinity Wings",
        flightCode: "9P501",
        price: "PKR 128718",
        date: "11 Aug 2024",
    },
    {
        id: 4,
        departureTime: "16:45",
        arrivalTime: "09:00 (+1)",
        duration: "16 hour(s) 15 minute(s)",
        stops: 2,
        stopLocations: ["Doha (DOH)", "Amsterdam (AMS)"],
        stopDurations: ["2 hour(s) 20 minute(s)", "1 hour(s) 50 minute(s)"],
        airline: "Infinity Wings",
        flightCode: "FJ301",
        price: "PKR 134500",
        date: "11 Aug 2024",
    },

    // Flights for 12 Aug 2024
    {
        id: 5,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "40 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Infinity Wings",
        flightCode: "9P502",
        price: "PKR 128718",
        date: "12 Aug 2024",
    },
    {
        id: 6,
        departureTime: "09:00",
        arrivalTime: "23:30",
        duration: "14 hour(s) 30 minute(s)",
        stops: 2,
        stopLocations: ["Abu Dhabi (AUH)", "Paris (CDG)"],
        stopDurations: ["1 hour(s) 45 minute(s)", "2 hour(s) 10 minute(s)"],
        airline: "Infinity Wings",
        flightCode: "FJ302",
        price: "PKR 128500",
        date: "12 Aug 2024",
    },


    // Flights for 13 Aug 2024
    {
        id: 7,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "40 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Infinity Wings",
        flightCode: "9P503",
        price: "PKR 128718",
        date: "13 Aug 2024",
    },
    {
        id: 8,
        departureTime: "15:00",
        arrivalTime: "06:30 (+1)",
        duration: "15 hour(s) 30 minute(s)",
        stops: 2,
        stopLocations: ["Frankfurt (FRA)", "Zurich (ZRH)"],
        stopDurations: ["1 hour(s) 55 minute(s)", "2 hour(s) 5 minute(s)"],
        airline: "Infinity Wings",
        flightCode: "FJ303",
        price: "PKR 132000",
        date: "13 Aug 2024",
    },


    // Flights for 14 Aug 2024
    {
        id: 9,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "40 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Infinity Wings",
        flightCode: "9P504",
        price: "PKR 128718",
        date: "14 Aug 2024",
    },
    {
        id: 10,
        departureTime: "12:30",
        arrivalTime: "01:45 (+1)",
        duration: "13 hour(s) 15 minute(s)",
        stops: 2,
        stopLocations: ["Istanbul (IST)", "Vienna (VIE)"],
        stopDurations: ["2 hour(s) 30 minute(s)", "1 hour(s) 45 minute(s)"],
        airline: "Infinity Wings",
        flightCode: "FJ304",
        price: "PKR 129500",
        date: "14 Aug 2024",
    },


    // Flights for 15 Aug 2024
    {
        id: 11,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "40 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Infinity Wings",
        flightCode: "9P505",
        price: "PKR 128718",
        date: "15 Aug 2024",
    },
    {
        id: 12,
        departureTime: "10:45",
        arrivalTime: "22:00",
        duration: "11 hour(s) 15 minute(s)",
        stops: 2,
        stopLocations: ["Dubai (DXB)", "Paris (CDG)"],
        stopDurations: ["1 hour(s) 45 minute(s)", "2 hour(s) 15 minute(s)"],
        airline: "Infinity Wings",
        flightCode: "FJ305",
        price: "PKR 131000",
        date: "15 Aug 2024",
    },


    // Flights for 16 Aug 2024
    {
        id: 13,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "40 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Infinity Wings",
        flightCode: "9P506",
        price: "PKR 128718",
        date: "16 Aug 2024",
    },
    {
        id: 14,
        departureTime: "08:30",
        arrivalTime: "20:45",
        duration: "12 hour(s) 15 minute(s)",
        stops: 2,
        stopLocations: ["Doha (DOH)", "Istanbul (IST)"],
        stopDurations: ["2 hour(s) 10 minute(s)", "1 hour(s) 35 minute(s)"],
        airline: "Fly Jinnah",
        flightCode: "FJ306",
        price: "PKR 128000",
        operatedBy: "Air Arabia",
        date: "16 Aug 2024",
    },


    // Flights for 17 Aug 2024
    {
        id: 15,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "40 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Infinity Wings",
        flightCode: "9P507",
        price: "PKR 128718",
        operatedBy: "Air Arabia",
        date: "17 Aug 2024",
    },
    {
        id: 16,
        departureTime: "14:00",
        arrivalTime: "01:30 (+1)",
        duration: "11 hour(s) 30 minute(s)",
        stops: 2,
        stopLocations: ["Dubai (DXB)", "Kuwait City (KWI)"],
        stopDurations: ["2 hour(s) 00 minute(s)", "1 hour(s) 30 minute(s)"],
        airline: "Infinity Wings",
        flightCode: "FJ307",
        price: "PKR 132000",
        date: "17 Aug 2024",
    },


    // Flights for 18 Aug 2024
    {
        id: 17,
        departureTime: "21:00",
        arrivalTime: "13:20 (+2)",
        duration: "40 hour(s) 20 minute(s)",
        stops: 1,
        airline: "Infinity Wings",
        flightCode: "9P508",
        price: "PKR 128718",
        date: "18 Aug 2024",
    },
    {
        id: 18,
        departureTime: "11:00",
        arrivalTime: "23:15",
        duration: "12 hour(s) 15 minute(s)",
        stops: 2,
        stopLocations: ["Doha (DOH)", "Muscat (MCT)"],
        stopDurations: ["1 hour(s) 45 minute(s)", "1 hour(s) 30 minute(s)"],
        airline: "Infinity Wings",
        flightCode: "FJ308",
        price: "PKR 131500",
        date: "18 Aug 2024",
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
    { day: "Tuesday", date: "18 Aug 2024", price: "PKR 138918" },
    // Add more dates as needed
];

const SelectFlightPage = () => {
    const [selectedDate, setSelectedDate] = useState(datesData[0].date);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [currency, setCurrency] = useState('PKR');
    const [bookingDetails, setBookingDetails] = useState({});
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showPackages, setShowPackages] = useState(false);
    const [resetKey, setResetKey] = useState(0); // New state to force re-render

    const flightSummaryRef = useRef(null);

    useEffect(() => {
        const storedBookingDetails = sessionStorage.getItem('bookingDetails');
        const storedCurrency = sessionStorage.getItem('selectedCurrency');
        if (storedBookingDetails) {
            setBookingDetails(JSON.parse(storedBookingDetails));
        }
        if (storedCurrency) {
            setCurrency(storedCurrency);
        }
    }, []);

    const formatPrice = (price) => {
        if (currency === 'USD') {
            return `USD ${(parseInt(price.replace(/[^\d]/g, '')) / 280).toFixed(2)}`;
        }
        if (currency === 'EUR') {
            return `EUR ${(parseInt(price.replace(/[^\d]/g, '')) / 320).toFixed(2)}`;
        }
        return price;
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setSelectedFlight(null);
        setShowPackages(false);
    };

    const handleFlightSelection = (flightId) => {
        setSelectedFlight(flightId);
        setSelectedPackage(null);
        setShowPackages(true);
        setResetKey(prevKey => prevKey + 1); // Increment key to force re-render
    };

    const handleBookNow = () => {
        if (flightSummaryRef.current) {
            flightSummaryRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const filteredFlights = flightsData.filter(flight => flight.date === selectedDate);
    const selectedFlightData = filteredFlights.find(flight => flight.id === selectedFlight);

    return (
        <>
            <br /><br />
            <FlightHeader />
            <br /><br />
            <div className="select-flight bg-white">
                <DateCarousel
                    dates={datesData}
                    selectedDate={selectedDate}
                    onDateSelect={handleDateSelect}
                />

                {showPackages && (
                    <FlightPackages
                        key={resetKey} // Add key to force re-render
                        selectedPackage={selectedPackage}
                        onSelectPackage={setSelectedPackage}
                    />
                )}

                <div className="flight-optionss">
                    {filteredFlights.map((flight) => (
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
                                <p>{flight.duration} / {flight.stops} {flight.stops > 1 ? 'stops' : 'stop'}</p>
                                <p>{flight.airline} - {flight.flightCode}</p>
                                {flight.operatedBy && <p>Operated by {flight.operatedBy}</p>}
                                {flight.stops > 0 && (
                                    <div className="flight-stops">
                                        {flight.stopLocations && flight.stopDurations && flight.stopLocations.map((location, index) => (
                                            <p key={index}>
                                                Stop {index + 1}: {location} for {flight.stopDurations[index]}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="flight-price">
                                <p>Price: {formatPrice(flight.price)}</p>
                                <button className="book-now" onClick={handleBookNow}>Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>

                <br /><br />
                <h1><center>Summary of Your Selection</center></h1>
                <div className="price-summary">
                    <h4>Price Breakdown for 1 Adult</h4>
                    <div>
                        <span>1 x Adult:</span>
                        <span>{bookingDetails.fare ? formatPrice(bookingDetails.fare) : 'N/A'}</span>
                    </div>
                    <div>
                        <span>Airport Tax & Surcharge:</span>
                        <span>{bookingDetails.tax ? formatPrice(bookingDetails.tax) : 'N/A'}</span>
                    </div>
                    <hr />
                    <div>
                        <strong>Total all inclusive:</strong>
                        <strong>{bookingDetails.total ? formatPrice(bookingDetails.total) : 'N/A'}</strong>
                    </div>
                </div>
            </div>

            {selectedFlightData && (
                <div className="flight-summary" ref={flightSummaryRef}>
                    <div className="flight-summary-details">
                        <p>{selectedFlightData.origin} to {selectedFlightData.destination}</p>
                        <p>Flight Code: {selectedFlightData.flightCode}</p>
                        <p>Departure: {selectedFlightData.date} {selectedFlightData.departureTime}</p>
                        <p>Arrival: {selectedFlightData.date} {selectedFlightData.arrivalTime}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default SelectFlightPage;
