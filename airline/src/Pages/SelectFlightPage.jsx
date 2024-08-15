import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import DateCarousel from "../components/DateCarousel";
import FlightHeader from "../components/FlightHeader";
import FlightPackages from "../components/FlightPackages"

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
        departureCountry: "Pakistan",
        arrivalCountry: "UnitedArabEmirates",
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
        departureCountry: "Pakistan",
        arrivalCountry: "Turkey",
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
        departureCountry: "Pakistan",
        arrivalCountry: "Australia",
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
        departureCountry: "Pakistan",
        arrivalCountry: "Netherlands",
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
        departureCountry: "Pakistan",
        arrivalCountry: "United States",
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
        departureCountry: "Pakistan",
        arrivalCountry: "France",
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
        departureCountry: "Pakistan",
        arrivalCountry: "United States",
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
        departureCountry: "Pakistan",
        arrivalCountry: "Switzerland",
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
        departureCountry: "Pakistan",
        arrivalCountry: "United States",
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
        departureCountry: "Pakistan",
        arrivalCountry: "Austria",
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
        departureCountry: "Pakistan",
        arrivalCountry: "United States",
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
        departureCountry: "Pakistan",
        arrivalCountry: "France",
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
        departureCountry: "Pakistan",
        arrivalCountry: "United States",
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
        departureCountry: "Pakistan",
        arrivalCountry: "Turkey",
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
        departureCountry: "Pakistan",
        arrivalCountry: "United States",
    },
    {
        id: 16,
        departureTime: "14:00",
        arrivalTime: "01:30 (+1)",
        duration: "11 hour(s) 30 minute(s)",
        stops: 2,
        stopLocations: ["Dubai (DXB)", "Kuwait City (KWI)"],
        stopDurations: ["2 hour(s) 0 minute(s)", "1 hour(s) 10 minute(s)"],
        airline: "Infinity Wings",
        flightCode: "FJ308",
        price: "PKR 128000",
        operatedBy: "Flynas",
        date: "17 Aug 2024",
        departureCountry: "Pakistan",
        arrivalCountry: "Saudi Arabia",
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
    const [resetKey, setResetKey] = useState(0);
    const [adultFare, setAdultFare] = useState(0);
    const [childFare, setChildFare] = useState(0);
    const [infantFare, setInfantFare] = useState(0);
    const [extraPrice, setExtraPrice] = useState(0);
    const [totalFare, setTotalFare] = useState(0);
    const [tax, setTax] = useState(0);
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
        const selectedFlight = flightsData.find(flight => flight.id === flightId);
        if (selectedFlight) {
            setSelectedFlight(selectedFlight);

            // Extract the price from the selected flight and remove the currency symbol
            const flightPrice = parseInt(selectedFlight.price.replace(/[^\d]/g, ''));

            // Calculate fares based on the selected flight price
            setAdultFare(flightPrice);
            setChildFare(flightPrice * 0.5);
            setInfantFare(flightPrice * 0.1);
        }
    };

    const handleBookNow = () => {
        setShowPackages(true);
        if (flightSummaryRef.current) {
            flightSummaryRef.current.scrollIntoView({ behavior: 'smooth' });
        }

    };

    const handleSelectPackage = (pkg) => {
        setSelectedPackage(pkg.id);
        setExtraPrice(pkg.price || 0); // Save the package price as the extraPrice
        console.log({ extraPrice })
    };

    const filteredFlights = flightsData.filter(flight =>
        flight.date === selectedDate &&
        flight.departureCountry === bookingDetails.fromCountry &&
        flight.arrivalCountry === bookingDetails.toCountry
    );

    const calculateFare = (passengerType, count) => {
        if (passengerType === 'adult') {
            return adultFare * count;
        } else if (passengerType === 'child') {
            return childFare * count;
        } else if (passengerType === 'infant') {
            return infantFare * count;
        }
        return 0;
    };
    const navigate = useNavigate();

const handleContinue = () => {
  navigate('/enter-details', {
        state: {
        passengers: {
        adults: bookingDetails.passengers.adults,
        children: bookingDetails.passengers.children,
        infants: bookingDetails.passengers.infants,
      },
    },
  });
};
    useEffect(() => {
        const total =
            calculateFare('adult', bookingDetails.passengers?.adults || 0) +
            calculateFare('child', bookingDetails.passengers?.children || 0) +
            calculateFare('infant', bookingDetails.passengers?.infants || 0);
        
        setTotalFare(total);
        setTax(extraPrice - total);
    }, [adultFare, childFare, infantFare, extraPrice, bookingDetails]);


    return (
        <>
            <br /><br />
            <FlightHeader />

            

            <div className="select-flight bg-white">
                <DateCarousel
                    dates={datesData}
                    selectedDate={selectedDate}
                    onDateSelect={handleDateSelect}
                />

                <h1><center>Select Flight From {bookingDetails.fromCountry} to {bookingDetails.toCountry}</center></h1>
                {showPackages && (
                    <FlightPackages
                        price={totalFare}
                        ref={flightSummaryRef}
                        key={resetKey} // Add key to force re-render
                        selectedPackage={selectedPackage}
                        onSelectPackage={handleSelectPackage} // Pass the function correctly
                    />

                )}

                <div className="flight-optionss">
                    {filteredFlights.length === 0 ? (
                        <div className="no-flights-message">
                            <p>No flights available for the selected route and date.</p>
                        </div>
                    ) : (
                        filteredFlights.map((flight) => (
                            <div
                                key={flight.id}
                                className={`flight-option ${selectedFlight?.id === flight.id ? "selected" : ""}`}
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
                        ))
                    )}
                </div>

                <br /><br />

                <h1><center>Summary of Your Selection</center></h1>
                <div className="summary-container">
                    <div className="price-summary">
                        <h4>
                            Price Breakdown for
                            {bookingDetails.passengers?.adults > 0 ? ` ${bookingDetails.passengers.adults} Adult${bookingDetails.passengers.adults > 1 ? 's' : ''}` : ''}
                            {bookingDetails.passengers?.children > 0 ? `, ${bookingDetails.passengers.children} Child${bookingDetails.passengers.children > 1 ? 'ren' : ''}` : ''}
                            {bookingDetails.passengers?.infants > 0 ? `, ${bookingDetails.passengers.infants} Infant${bookingDetails.passengers.infants > 1 ? 's' : ''}` : ''}
                        </h4>

                        {bookingDetails.passengers?.adults > 0 && (
                            <div>
                                <span>{bookingDetails.passengers.adults > 0 ? ` ${bookingDetails.passengers.adults} x Adult${bookingDetails.passengers.adults > 1 ? 's' : ''}` : ''}: </span>
                                <span>{formatPrice(adultFare.toString())}</span>
                            </div>
                        )}
                        {bookingDetails.passengers?.children > 0 && (
                            <div>
                                <span>{bookingDetails.passengers.children > 0 ? ` ${bookingDetails.passengers.children} x Child${bookingDetails.passengers.children > 1 ? 'ren' : ''}` : ''}: </span>
                                <span>{Math.round(formatPrice(childFare.toString()))}</span>
                            </div>
                        )}
                        {bookingDetails.passengers?.infants > 0 && (
                            <div>
                                <span>{bookingDetails.passengers.infants > 0 ? ` ${bookingDetails.passengers.infants} x Infant${bookingDetails.passengers.infants > 1 ? 's' : ''}` : ''}: </span>
                                <span>{Math.round(formatPrice(infantFare.toString()))}</span>
                            </div>
                        )}
                        {selectedPackage && (
                            <div>
                                <span>Airport Tax & Surcharge: {selectedPackage.name}:</span>
                                <span>{formatPrice(tax.toString())}</span>
                            </div>
                        )}


                        <div>
                            <strong>Total all inclusive:</strong>
                            <span>{formatPrice((totalFare + extraPrice).toString())}</span>
                        </div>


                    </div>

                    <div className="flight-summary">
                        <div className="flight-summary-details">
                            <h4> {bookingDetails.fromCountry} to {bookingDetails.toCountry}</h4>
                            <p>Flight Code: {selectedFlight?.flightCode}</p>
                            <p>Departure: {selectedFlight?.date} {selectedFlight?.departureTime}</p>
                            <p>Arrival: {selectedFlight?.date} {selectedFlight?.arrivalTime}</p>
                        </div>
                    </div>
                </div>
                 {/* Add the "Continue to Passenger Details" button */}
            <div className="continue-button-container">
                <button className="continue-button" onClick={handleContinue}>
                    Continue to Passenger Details 
                </button>
            </div>  
            </div>
        </>
    );
};

export default SelectFlightPage;