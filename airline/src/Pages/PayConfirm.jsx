import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FlightHeader from '../components/FlightHeader';
import '../css/PayConfirm.css';

const PayConfirm = () => {
  const navigate = useNavigate();
  const [hoveredMethod, setHoveredMethod] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [errors, setErrors] = useState({});
  const [flightSummary, setFlightSummary] = useState({});
  const [priceSummary, setPriceSummary] = useState({});
  const [bookingDetails, setBookingDetails] = useState({});

  const paymentMethods = [
    { name: 'mastercard', icon: 'https://cdn-icons-png.flaticon.com/512/733/733250.png' },
    { name: 'visa', icon: 'https://cdn-icons-png.flaticon.com/512/733/733247.png' },
    { name: 'link', icon: 'https://cdn-icons-png.flaticon.com/512/733/733275.png' },
    { name: 'nayapay', icon: 'https://cdn-icons-png.flaticon.com/512/733/733591.png' },
  ];

  useEffect(() => {
    const storedFlightSummary = sessionStorage.getItem('flightSummary');
    const storedPriceSummary = sessionStorage.getItem('priceSummary');
    const storedBookingDetails = sessionStorage.getItem('bookingDetails');

    if (storedFlightSummary) {
      setFlightSummary(JSON.parse(storedFlightSummary));
    }
    if (storedPriceSummary) {
      setPriceSummary(JSON.parse(storedPriceSummary));
    }
    if (storedBookingDetails) {
      setBookingDetails(JSON.parse(storedBookingDetails));
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!cardNumber) newErrors.cardNumber = 'Card number is required.';
    if (!expirationMonth) newErrors.expirationMonth = 'Expiration month is required.';
    if (!expirationYear) newErrors.expirationYear = 'Expiration year is required.';
    if (!securityCode) newErrors.securityCode = 'Security code is required.';
    if (!nameOnCard) newErrors.nameOnCard = 'Name on card is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const months = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
  ];

  const years = [];
  for (let i = 0; i < 12; i++) {
    const year = 2024 + i;
    years.push(year.toString());
  }

  const handleConfirmPayment = () => {
    if (validateForm()) {
      // Proceed with payment processing
      navigate('/booked'); // Redirect to Booked page
    }
  };

  return (
    <div className="pageContainer">
      <FlightHeader />
      <br />
      <br />
      <div className="contentContainer">
        <div className="sidebar">
          <br />
          <div className="reservationSummary">
            <br />
            <h2 className="sectionTitle">Reservation Summary</h2>
            <div className="flightDetails">
              <div className='Flight-Summary'>
                <h3 className="subHeader">
                  {bookingDetails.fromCountry && bookingDetails.toCountry
                    ? `${bookingDetails.fromCountry} to ${bookingDetails.toCountry}`
                    : 'Flight Route'}
                </h3>
                <p className="text">{flightSummary.flightCode || 'Flight Code'}</p>
                <p className="text">{flightSummary.departureTime || 'Departure Time'}</p>
                <p className="text">{flightSummary.arrivalTime || 'Arrival Time'}</p>
                {/* Add additional flight details if available */}
              </div>
              <div className='Price-Summary'>
                Price Breakdown for
                {bookingDetails.passengers?.adults > 0 ? ` ${bookingDetails.passengers.adults} Adult${bookingDetails.passengers.adults > 1 ? 's' : ''}` : ''}
                {bookingDetails.passengers?.children > 0 ? `, ${bookingDetails.passengers.children} Child${bookingDetails.passengers.children > 1 ? 'ren' : ''}` : ''}
                {bookingDetails.passengers?.infants > 0 ? `, ${bookingDetails.passengers.infants} Infant${bookingDetails.passengers.infants > 1 ? 's' : ''}` : ''}
                <p className="text">Total Fare : {priceSummary.currency}{priceSummary.totalFare || 'totalFare'}</p>
                <p className="text">Airport Tax & Surcharge : {priceSummary.currency}{priceSummary.tax || 'Tax & Surcharge'}</p>
                <h3 className="totalPrice">Total All Inclusive: <br /> {priceSummary.currency} {priceSummary.extraPrice || 'Total Price'}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mainContent">
          <div className="paymentOptions">
            <h3 className="sectionTitle">Would You Like to Pay Using Your Air Rewards Points?</h3>
            <div className="radioGroup">
              <label className="radioLabel">
                <input type="radio" id="yes" name="points" value="yes" required />
                Yes
              </label>
              <label className="radioLabel">
                <input type="radio" id="no" name="points" value="no" defaultChecked required />
                No
              </label>
            </div>

            <h3 className="sectionTitle">Would You Like to Pay Using Voucher or Credit from Your Earlier Reservation?</h3>
            <div className="radioGroup">
              <label className="radioLabel">
                <input type="radio" id="voucher-yes" name="voucher" value="yes" required />
                Yes
              </label>
              <label className="radioLabel">
                <input type="radio" id="voucher-no" name="voucher" value="no" defaultChecked required />
                No
              </label>
            </div>
          </div>

          <div>
            <h3 className="sectionTitle">Please Select Your Payment Method</h3>
            <div className="paymentMethodOptions">
              {paymentMethods.map((method) => (
                <label
                  key={method.name}
                  className={`paymentMethodLabel ${hoveredMethod === method.name ? 'paymentMethodLabelHover' : ''} ${selectedMethod === method.name ? 'paymentMethodSelected' : ''}`}
                  onMouseEnter={() => setHoveredMethod(method.name)}
                  onMouseLeave={() => setHoveredMethod(null)}
                  onClick={() => setSelectedMethod(method.name)}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value={method.name}
                    className="radioInput"
                    required
                  />
                  <img src={method.icon} alt={method.name} className="paymentMethodImg" />
                  <p className="paymentMethodText">
                    {method.name.charAt(0).toUpperCase() + method.name.slice(1)} (PKR)
                  </p>
                </label>
              ))}
            </div>
            {errors.selectedMethod && <p className="errorText">{errors.selectedMethod}</p>}
          </div>

          <div className="cardDetails">
            <label className="inputLabel">
              Card Number
              <input
                type="text"
                placeholder="The 16 digits on front of your card"
                className="input"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
              {errors.cardNumber && <p className="errorText">{errors.cardNumber}</p>}
            </label>
            <div className="expirationDate">
              <select
                className="select"
                value={expirationMonth}
                onChange={(e) => setExpirationMonth(e.target.value)}
                required
              >
                <option value="">MM</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className="select"
                value={expirationYear}
                onChange={(e) => setExpirationYear(e.target.value)}
                required
              >
                <option value="">YYYY</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {errors.expirationMonth && <p className="errorText">{errors.expirationMonth}</p>}
              {errors.expirationYear && <p className="errorText">{errors.expirationYear}</p>}
            </div>
            <label className="inputLabel">
              Security Code
              <input
                type="text"
                placeholder="CVV2"
                className="input"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                required
              />
              {errors.securityCode && <p className="errorText">{errors.securityCode}</p>}
            </label>
            <label className="inputLabel">
              Name on Card
              <input
                type="text"
                placeholder="Full name as on the card"
                className="input"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                required
              />
              {errors.nameOnCard && <p className="errorText">{errors.nameOnCard}</p>}
            </label>
          </div>

          <div className="totalAmount">
            <h3 className="totalAmountText">Total Amount Due</h3>
            <p className="totalAmountValue">PKR {priceSummary.total || 'Total Price'}</p>
          </div>

          <button
            onClick={handleConfirmPayment}
            className={`confirmButton ${hovered ? 'confirmButtonHover' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayConfirm;
