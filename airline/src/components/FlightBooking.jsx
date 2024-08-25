import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightBooking = () => {
    const [tripType, setTripType] = useState('oneWay');
    const [selectedFromCountry, setSelectedFromCountry] = useState('');
    const [selectedToCountry, setSelectedToCountry] = useState('');
    const [fromAirports, setFromAirports] = useState([]);
    const [toAirports, setToAirports] = useState([]);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [generalMessage, setGeneralMessage] = useState('');
    const [validationMessages, setValidationMessages] = useState({});
    const [fare, setFare] = useState(15655.00);
    const [tax, setTax] = useState(5992.90);
    const [total, setTotal] = useState(21647.90);
    const [countryAirports, setCountryAirports] = useState({});
    const [currency, setCurrency] = useState('PKR');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [fromAirport, setFromAirport] = useState('');
    const [toAirport, setToAirport] = useState('');

    const navigate = useNavigate();

    const adultFare = 15655.00;
    const childFare = 15655.00;
    const infantFare = 1565.50;

    useEffect(() => {
        const fetchAirports = async () => {
            try {
                const res = await fetch('http://localhost:8000/airports');
                const data = await res.json();
                setCountryAirports(data);
            } catch (error) {
                console.error('Error fetching airports:', error);
            }
        };
        fetchAirports();
    }, []);

    useEffect(() => {
        calculateFare();
    }, [adults, children, infants]);

    const handleFromCountryChange = (e) => {
        const country = e.target.value;
        setSelectedFromCountry(country);
        setFromAirports(countryAirports[country] || []);
    };

    const handleToCountryChange = (e) => {
        const country = e.target.value;
        setSelectedToCountry(country);
        setToAirports(countryAirports[country] || []);
    };

    const handleTripTypeChange = (e) => {
        setTripType(e.target.value);
    };

    const calculateFare = () => {
        const totalFare = (adults * adultFare) + (children * childFare) + (infants * infantFare);
        setFare(totalFare);
        setTotal(totalFare + tax);
    };

    const handleSearchFlightClick = async (e) => {
        e.preventDefault();

        const messages = {};

        if (!selectedFromCountry) {
            messages.fromCountry = "Please select a departure country.";
        }

        if (!selectedToCountry) {
            messages.toCountry = "Please select a destination country.";
        }

        if (!fromAirport) {
            messages.fromAirport = "Please select a departure airport.";
        }

        if (!toAirport) {
            messages.toAirport = "Please select a destination airport.";
        }

        if (!departDate) {
            messages.depart = "Please select a departure date.";
        }

        if (tripType === 'returnTrip' && !returnDate) {
            messages.return = "Please select a return date.";
        }

        if (Object.keys(messages).length > 0) {
            setValidationMessages(messages);
            setGeneralMessage("Please fill in all the required fields.");
            return;
        }

        sessionStorage.setItem('selectedCurrency', currency);
        sessionStorage.setItem('bookingDetails', JSON.stringify({
            fromCountry: selectedFromCountry,
            toCountry: selectedToCountry,
            fromAirport: fromAirport,
            toAirport: toAirport,
            departDate: departDate,
            returnDate: returnDate,
            tripType: tripType,
            fare: fare,
            tax: tax,
            total: total,
            currency: currency,
            passengers: {
                adults: adults,
                children: children,
                infants: infants,
            }
        }));
        const bookingDetails = {
            fromCountry: selectedFromCountry,
            toCountry: selectedToCountry,
            fromAirport: fromAirport,
            toAirport: toAirport,
            departDate: departDate,
            returnDate: returnDate,
            tripType: tripType,
            fare: fare,
            tax: tax,
            total: total,
            currency: currency,
            passengers: {
                adults: adults,
                children: children,
                infants: infants,
            }
        };
    
        try {
            const response = await fetch('http://localhost:8002/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingDetails),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log('Booking saved successfully with ID:', result.bookingId);
                sessionStorage.setItem('bookingId', result.bookingId); // Store booking ID in session storage
                navigate('/select-flight');
            } else {
                console.log('Error saving booking');
            }
        } catch (error) {
            console.error('Error connecting to server:', error);
        }
    };

    // Get today's date in 'YYYY-MM-DD' format
    const today = new Date().toISOString().split('T')[0];
    const greyBorderStyle = { borderColor: '#6c757d', borderWidth: '1px', borderStyle: 'solid' };

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5">
                    <h5 className="section-title px-3">Book a Flight</h5>
                    <h1 className="mb-0">Plan Your Journey</h1>
                </div>
                <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-12">
                            <form style={{ width: '1150px' }}>
                                <div className="row g-3" style={{ width: '100%' }}>
                                <div className="col-md-6">
                                        <label htmlFor="fromCountry">From Country<span className='req'>*</span></label>
                                        <select className="form-select" id="fromCountry" aria-label="From Country" onChange={handleFromCountryChange} style={greyBorderStyle} value={selectedFromCountry}>
                                            <option value="">Select a Country</option>
                                            {Object.keys(countryAirports).map((country) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                        {validationMessages.fromCountry && (
                                            <div className="text-danger">{validationMessages.fromCountry}</div>
                                        )}
                                    </div>
                                    {selectedFromCountry && (
                                        <div className="col-md-6">
                                            <label htmlFor="fromAirport">From Airport<span className='req'>*</span></label>
                                            <select className="form-select" id="fromAirport" aria-label="From Airport" style={greyBorderStyle} value={fromAirport} onChange={(e) => setFromAirport(e.target.value)}>
                                                <option value="">Select an Airport</option>
                                                {fromAirports.map((airport, index) => (
                                                    <option key={index} value={airport}>
                                                        {airport}
                                                    </option>
                                                ))}
                                            </select>
                                            {validationMessages.fromAirport && (
                                                <div className="text-danger">{validationMessages.fromAirport}</div>
                                            )}
                                        </div>
                                    )}
                                    <div className="col-md-6">
                                        <label htmlFor="toCountry">To Country<span className='req'>*</span></label>
                                        <select className="form-select" id="toCountry" aria-label="To Country" onChange={handleToCountryChange} style={greyBorderStyle} value={selectedToCountry}>
                                            <option value="">Select a Country</option>
                                            {Object.keys(countryAirports).map((country) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                        {validationMessages.toCountry && (
                                            <div className="text-danger">{validationMessages.toCountry}</div>
                                        )}
                                    </div>
                                    {selectedToCountry && (
                                        <div className="col-md-6">
                                            <label htmlFor="toAirport">To Airport<span className='req'>*</span></label>
                                            <select className="form-select" id="toAirport" aria-label="To Airport" style={greyBorderStyle} value={toAirport} onChange={(e) => setToAirport(e.target.value)}>
                                                <option value="">Select an Airport</option>
                                                {toAirports.map((airport, index) => (
                                                    <option key={index} value={airport}>
                                                        {airport}
                                                    </option>
                                                ))}
                                            </select>
                                            {validationMessages.toAirport && (
                                                <div className="text-danger">{validationMessages.toAirport}</div>
                                            )}
                                        </div>
                                    )}

                                    <div className="col-md-6">
                                        <label htmlFor="depart">Depart<span className='req'>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="depart"
                                            placeholder="Select Departure Date"
                                            style={greyBorderStyle}
                                            value={departDate}
                                            min={today}
                                            onChange={(e) => setDepartDate(e.target.value)}
                                        />
                                        {validationMessages.depart && (
                                            <div className="text-danger">{validationMessages.depart}</div>
                                        )}
                                    </div>

                                    {tripType === 'returnTrip' && (
                                        <div className="col-md-6">
                                            <label htmlFor="return">Return<span className='req'>*</span></label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="return"
                                                placeholder="Select Return Date"
                                                style={greyBorderStyle}
                                                value={returnDate}
                                                min={departDate || today}
                                                onChange={(e) => setReturnDate(e.target.value)}
                                                required={tripType === 'returnTrip'}
                                            />
                                            {validationMessages.return && (
                                                <div className="text-danger">{validationMessages.return}</div>
                                            )}
                                        </div>
                                    )}

<div className="col-md-12">
                                        <label>Passengers</label>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label htmlFor="adults">Adults (1-9)</label>
                                                <select className="form-select" id="adults" aria-label="Adults" style={greyBorderStyle} value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                                                    {[...Array(9).keys()].map(num => (
                                                        <option key={num + 1} value={num + 1}>
                                                            {num + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="children">Children (2-12)</label>
                                                <select className="form-select" id="children" aria-label="Children" style={greyBorderStyle} value={children} onChange={(e) => setChildren(Number(e.target.value))}>
                                                    {[...Array(13).keys()].map(num => (
                                                        <option key={num} value={num}>
                                                            {num}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="infants">Infants (0-1)</label>
                                                <select className="form-select" id="infants" aria-label="Infants" style={greyBorderStyle} value={infants} onChange={(e) => setInfants(Number(e.target.value))}>
                                                    {[0, 1].map(num => (
                                                        <option key={num} value={num}>
                                                            {num}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="currency">Currency</label>
                                        <select className="form-select" id="currency" aria-label="Currency" style={greyBorderStyle} value={currency} onChange={(e) => setCurrency(e.target.value)}>
                                            <option value="PKR">PKR</option>
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="AED">AED</option>
                                            <option value="AMD">AMD</option>
                                            <option value="INR">INR</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="tripType"
                                                id="oneWay"
                                                value="oneWay"
                                                checked={tripType === 'oneWay'}
                                                onChange={handleTripTypeChange}
                                            />
                                            <label className="form-check-label" htmlFor="oneWay">One Way</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="tripType"
                                                id="returnTrip"
                                                value="returnTrip"
                                                checked={tripType === 'returnTrip'}
                                                onChange={handleTripTypeChange}
                                            />
                                            <label className="form-check-label" htmlFor="returnTrip">Return</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="promoCode">Promo Code</label>
                                        <input type="text" className="form-control" id="promoCode" placeholder="Enter Promo Code" style={greyBorderStyle} />
                                    </div>
                                    <div className="col-md-12">
                                        {generalMessage && (
                                            <div className="alert alert-danger">
                                                {generalMessage}
                                            </div>
                                        )}
                                        <div className="col-12 d-flex justify-content-center align-items-center">
                                            <button
                                                
                                                className="btn btn-primary"
                                                type="submit"
                                                onClick={handleSearchFlightClick}
                                            >
                                                Search Flight
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightBooking;