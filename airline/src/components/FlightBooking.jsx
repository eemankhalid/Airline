import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightBooking = () => {
    const [tripType, setTripType] = useState('oneWay');
    const [selectedFromCountry, setSelectedFromCountry] = useState('');
    const [selectedToCountry, setSelectedToCountry] = useState('');
    const [fromAirports, setFromAirports] = useState([]);
    const [toAirports, setToAirports] = useState([]);
    const [generalMessage, setGeneralMessage] = useState('');
    const [validationMessages, setValidationMessages] = useState({});

    const navigate = useNavigate(); 

    const countryAirports = {
        Armenia: ["Zvartnots International Airport (EVN) - Yerevan"],
        Azerbaijan: ["Heydar Aliyev International Airport (GYD) - Baku"],
        Bahrain: ["Bahrain International Airport (BAH) - Manama"],
        Egypt: ["Cairo International Airport (CAI) - Cairo"],
        Georgia: ["Tbilisi International Airport (TBS) - Tbilisi"],
        Germany: ["Frankfurt Airport (FRA) - Frankfurt", "Munich Airport (MUC) - Munich"],
        Iran: ["Imam Khomeini International Airport (IKA) - Tehran"],
        Iraq: ["Baghdad International Airport (BGW) - Baghdad"],
        Italy: ["Leonardo da Vinci–Fiumicino Airport (FCO) - Rome"],
        Jordan: ["Queen Alia International Airport (AMM) - Amman"],
        Kazakhstan: ["Nursultan Nazarbayev International Airport (NQZ) - Nur-Sultan"],
        Kenya: ["Jomo Kenyatta International Airport (NBO) - Nairobi"],
        Kuwait: ["Kuwait International Airport (KWI) - Kuwait City"],
        Kyrgyzstan: ["Manas International Airport (FRU) - Bishkek"],
        Lebanon: ["Beirut-Rafic Hariri International Airport (BEY) - Beirut"],
        Malaysia: ["Kuala Lumpur International Airport (KUL) - Kuala Lumpur"],
        Maldives: ["Velana International Airport (MLE) - Malé"],
        Morocco: ["Mohammed V International Airport (CMN) - Casablanca"],
        Oman: ["Muscat International Airport (MCT) - Muscat"],
        Pakistan: ["Jinnah International Airport (KHI) - Karachi", "Allama Iqbal International Airport (LHE) - Lahore", "Multan International Airport (MUX)", "Bacha Khan International Airport Peshawar (PEW)", "Islamabad International Airport (ISB)"],
        Qatar: ["Hamad International Airport (DOH) - Doha"],
        Russia: ["Sheremetyevo International Airport (SVO) - Moscow"],
        SaudiArabia: ["King Abdulaziz International Airport (JED) - Jeddah", "King Khalid International Airport (RUH) - Riyadh"],
        Somaliland: ["Hargeisa Egal International Airport (HGA) - Hargeisa"],
        Thailand: ["Suvarnabhumi Airport (BKK) - Bangkok"],
        Turkey: ["Istanbul Airport (IST) - Istanbul"],
        Uganda: ["Entebbe International Airport (EBB) - Entebbe"],
        UnitedArabEmirates: ["Dubai International Airport (DXB) - Dubai", "Abu Dhabi International Airport (AUH) - Abu Dhabi"],
        Uzbekistan: ["Islam Karimov Tashkent International Airport (TAS) - Tashkent"],
    };


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

    const handleBookNowClick = (e) => {
        e.preventDefault();


        const messages = {};

        if (!selectedFromCountry) {
            messages.fromCountry = "Please select a departure country.";
        }

        if (!selectedToCountry) {
            messages.toCountry = "Please select a destination country.";
        }

        const fromAirport = document.getElementById('fromAirport')?.value;
        const toAirport = document.getElementById('toAirport')?.value;
        const departDate = document.getElementById('depart')?.value;
        const returnDate = document.getElementById('return')?.value;

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

        setValidationMessages({});
        setGeneralMessage('');
        navigate('/select-flight');
    };

    const greyBorderStyle = { borderColor: '#6c757d', borderWidth: '1px', borderStyle: 'solid' };

    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                        <h5 className="section-title px-3">Book a Flight</h5>
                        <h1 className="mb-0">Plan Your Journey</h1>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-12">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        
                                        <label htmlFor="fromCountry">From Country<span className='req'>*</span></label>
                                        <select className="form-select" id="fromCountry" aria-label="From Country" onChange={handleFromCountryChange} style={greyBorderStyle}>
                                            <option defaultValue>Select a Country</option>
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
                                            <select className="form-select" id="fromAirport" aria-label="From Airport" style={greyBorderStyle}>
                                                <option defaultValue>Select an Airport</option>
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
                                        <select className="form-select" id="toCountry" aria-label="To Country" onChange={handleToCountryChange} style={greyBorderStyle}>
                                            <option defaultValue>Select a Country</option>
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
                                            <select className="form-select" id="toAirport" aria-label="To Airport" style={greyBorderStyle}>
                                                <option defaultValue>Select an Airport</option>
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
                                        <input type="date" className="form-control" id="depart" placeholder="Select Departure Date" style={greyBorderStyle} />
                                        {validationMessages.depart && (
                                            <div className="text-danger">{validationMessages.depart}</div>
                                        )}
                                    </div>
                                    {tripType === 'returnTrip' && (
                                        <div className="col-md-6">
                                            <label htmlFor="return">Return</label>
                                            <label htmlFor="return">Return<span className='req'>*</span></label>
                                            <input type="date" className="form-control" id="return" placeholder="Select Return Date" style={greyBorderStyle} />
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
                                                <select className="form-select" id="adults" aria-label="Adults" style={greyBorderStyle}>
                                                    <option defaultValue>1</option>
                                                    <option value="2">2</option>
                                                    <option value="2">3</option>
                                                    <option value="2">4</option>
                                                    <option value="2">5</option>
                                                    <option value="2">6</option>
                                                    <option value="2">7</option>
                                                    <option value="2">8</option>
                                                    <option value="2">9</option>
                                                   
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="children">Children (2-12)</label>
                                                <select className="form-select" id="children" aria-label="Children" style={greyBorderStyle}>
                                                  
                                                <option defaultValue>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="4">5</option>
                                                    <option value="4">6</option>
                                                    <option value="4">7</option>
                                                    <option value="4">8</option>
                                                    <option value="4">9</option>
                                                    <option value="4">10</option>
                                                    <option value="4">11</option>
                                                    <option value="4">12</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="infants">Infants (0-1)</label>
                                                <select className="form-select" id="infants" aria-label="Infants" style={greyBorderStyle}>
                                                    <option defaultValue>0</option>
                                                    <option value="1">1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="currency">Currency</label>
                                        <select className="form-select" id="currency" aria-label="Currency" style={greyBorderStyle}>
                                            <option defaultValue>PKR</option>
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="EUR">AED</option>
                                            <option value="EUR">AMD</option>
                                            <option value="EUR">INR</option>
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
                                    <div className="col-12">
                                        <button
                                            className="btn btn-primary w-100"
                                            type="submit"
                                            onClick={handleBookNowClick}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlightBooking;
