import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightBooking = () => {
    const [tripType, setTripType] = useState('oneWay');
    const [selectedFromCountry, setSelectedFromCountry] = useState('');
    const [selectedToCountry, setSelectedToCountry] = useState('');
    const [fromAirports, setFromAirports] = useState([]);
    const [toAirports, setToAirports] = useState([]);

    const navigate = useNavigate();  // Use useNavigate for navigation

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
        Pakistan: ["Jinnah International Airport (KHI) - Karachi", "Allama Iqbal International Airport (LHE) - Lahore"],
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
        // Redirect to the SelectFlight page
        navigate('/select-flight');
    };

    return (
        <>
            <div className="container-fluid py-5 ">
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
                                        <label htmlFor="fromCountry">From Country</label>
                                        <select className="form-select border-0" id="fromCountry" aria-label="From Country" onChange={handleFromCountryChange}>
                                            <option defaultValue>Select a Country</option>
                                            {Object.keys(countryAirports).map((country) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {selectedFromCountry && (
                                        <div className="col-md-6">
                                            <label htmlFor="fromAirport">From Airport</label>
                                            <select className="form-select border-0" id="fromAirport" aria-label="From Airport">
                                                <option defaultValue>Select an Airport</option>
                                                {fromAirports.map((airport, index) => (
                                                    <option key={index} value={airport}>
                                                        {airport}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                    <div className="col-md-6">
                                        <label htmlFor="toCountry">To Country</label>
                                        <select className="form-select border-0" id="toCountry" aria-label="To Country" onChange={handleToCountryChange}>
                                            <option defaultValue>Select a Country</option>
                                            {Object.keys(countryAirports).map((country) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {selectedToCountry && (
                                        <div className="col-md-6">
                                            <label htmlFor="toAirport">To Airport</label>
                                            <select className="form-select border-0" id="toAirport" aria-label="To Airport">
                                                <option defaultValue>Select an Airport</option>
                                                {toAirports.map((airport, index) => (
                                                    <option key={index} value={airport}>
                                                        {airport}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                    <div className="col-md-6">
                                        <label htmlFor="depart">Depart</label>
                                        <input type="date" className="form-control border-0" id="depart" placeholder="Select Departure Date" />
                                    </div>
                                    {tripType === 'returnTrip' && (
                                        <div className="col-md-6">
                                            <label htmlFor="return">Return</label>
                                            <input type="date" className="form-control border-0" id="return" placeholder="Select Return Date" />
                                        </div>
                                    )}
                                    <div className="col-md-12">
                                        <label>Passengers</label>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label htmlFor="adults">Adults (1-9)</label>
                                                <select className="form-select border-0" id="adults" aria-label="Adults">
                                                    <option defaultValue>1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="children">Children (2-12)</label>
                                                <select className="form-select border-0" id="children" aria-label="Children">
                                                    <option defaultValue>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="infants">Infants (0-1)</label>
                                                <select className="form-select border-0" id="infants" aria-label="Infants">
                                                    <option defaultValue>0</option>
                                                    <option value="1">1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="currency">Currency</label>
                                        <select className="form-select border-0" id="currency" aria-label="Currency">
                                            <option defaultValue>PKR</option>
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
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
                                        <input type="text" className="form-control border-0" id="promoCode" placeholder="Enter Promo Code" />
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit"  onClick={handleBookNowClick}>Book Now</button>
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
