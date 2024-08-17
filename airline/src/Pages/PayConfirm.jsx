import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlightHeader from '../components/FlightHeader';
import { color } from 'framer-motion';

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

  const paymentMethods = [
    { name: 'mastercard', icon: 'https://cdn-icons-png.flaticon.com/512/733/733250.png' },
    { name: 'visa', icon: 'https://cdn-icons-png.flaticon.com/512/733/733247.png' },
    { name: 'link', icon: 'https://cdn-icons-png.flaticon.com/512/733/733275.png' },
    { name: 'nayapay', icon: 'https://cdn-icons-png.flaticon.com/512/733/733591.png' },
  ];


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
    <div style={styles.pageContainer}>
      <FlightHeader />
      <br />
      <br />
      <div style={styles.contentContainer}>
        <div style={styles.sidebar}>
          <br />
          <div style={styles.reservationSummary}>
            <br />
            <h2 style={styles.sectionTitle}>Reservation Summary</h2>
            <div style={styles.flightDetails}>
              <div>
                <h3 style={styles.subHeader}>Karachi to Doha - Hamad Int (Ultimate)</h3>
                <p style={styles.text}>G9549 Departure 23-08-2024 03:00</p>
                <p style={styles.text}>Arrival 23-08-2024 04:00</p>
                <p style={styles.text}>G9135 Departure 23-08-2024 08:55</p>
                <p style={styles.text}>Arrival 23-08-2024 08:55</p>
              </div>
              <div>
                <h3 style={styles.subHeader}>Price Breakdown for 1 Adult</h3>
                <p style={styles.text}>1 X Adult PKR 138,290.11</p>
                <p style={styles.text}>Airport Tax & Surcharge PKR 86,909.54</p>
                <p style={styles.text}>Administration Fee PKR 6,755.99</p>
                <h3 style={styles.totalPrice}>Total All Inclusive PKR 231,955.64</h3>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.mainContent}>
          {/* Your other content */}
          <div style={styles.paymentOptions}>
            <h3 style={styles.sectionTitle}>Would You Like to Pay Using Your Air Rewards Points?</h3>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input type="radio" id="yes" name="points" value="yes" required />
                Yes
              </label>
              <label style={styles.radioLabel}>
                <input type="radio" id="no" name="points" value="no" defaultChecked required />
                No
              </label>
            </div>

            <h3 style={styles.sectionTitle}>Would You Like to Pay Using Voucher or Credit from Your Earlier Reservation?</h3>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input type="radio" id="voucher-yes" name="voucher" value="yes" required />
                Yes
              </label>
              <label style={styles.radioLabel}>
                <input type="radio" id="voucher-no" name="voucher" value="no" defaultChecked required />
                No
              </label>
            </div>
          </div>

          <div>
            <h3 style={styles.sectionTitle}>Please Select Your Payment Method</h3>
            <div style={styles.paymentMethodOptions}>
              {paymentMethods.map((method) => (
                <label
                  key={method.name}
                  style={{
                    ...styles.paymentMethodLabel,
                    ...(hoveredMethod === method.name && styles.paymentMethodLabelHover),
                    ...(selectedMethod === method.name && styles.paymentMethodSelected),
                  }}
                  onMouseEnter={() => setHoveredMethod(method.name)}
                  onMouseLeave={() => setHoveredMethod(null)}
                  onClick={() => setSelectedMethod(method.name)}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value={method.name}
                    style={styles.radioInput}
                    required
                  />
                  <img src={method.icon} alt={method.name} style={styles.paymentMethodImg} />
                  <p style={styles.paymentMethodText}>
                    {method.name.charAt(0).toUpperCase() + method.name.slice(1)} (PKR)
                  </p>
                </label>
              ))}
            </div>
            {errors.selectedMethod && <p style={styles.errorText}>{errors.selectedMethod}</p>}
          </div>

          <div style={styles.cardDetails}>
            <label style={styles.inputLabel}>
              Card Number
              <input
                type="text"
                placeholder="The 16 digits on front of your card"
                style={styles.input}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
              {errors.cardNumber && <p style={styles.errorText}>{errors.cardNumber}</p>}
            </label>
            <div style={styles.expirationDate}>
              <select
                style={styles.select}
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
                style={styles.select}
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
              {errors.expirationMonth && <p style={styles.errorText}>{errors.expirationMonth}</p>}
              {errors.expirationYear && <p style={styles.errorText}>{errors.expirationYear}</p>}
            </div>
            <label style={styles.inputLabel}>
              Security Code
              <input
                type="text"
                placeholder="CVV2"
                style={styles.input}
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                required
              />
              {errors.securityCode && <p style={styles.errorText}>{errors.securityCode}</p>}
            </label>
            <label style={styles.inputLabel}>
              Name on Card
              <input
                type="text"
                placeholder="Full name as on the card"
                style={styles.input}
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                required
              />
              {errors.nameOnCard && <p style={styles.errorText}>{errors.nameOnCard}</p>}
            </label>
          </div>

          <div style={styles.totalAmount}>
            <h3 style={styles.totalAmountText}>Total Amount Due</h3>
            <p style={styles.totalAmountValue}>PKR 231,955.64</p>
          </div>

          <button
            onClick={handleConfirmPayment}
            style={{
              ...styles.confirmButton,
              ...(hovered && styles.confirmButtonHover),
            }}
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

const styles = {
  pageContainer: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    padding: '40px',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
  },
  sidebar: {
    flex: '1',
  },
  mainContent: {
    flex: '2',
  },
  reservationSummary: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  sectionTitle: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold',
    borderBottom: '2px solid grey',
    paddingBottom: '10px',
  },
  flightDetails: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    color: '#555',
    gap: '10px',
  },
  subHeader: {
    color: 'black',
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: '600',
  },
  text: {
    marginBottom: '10px',
  },
  totalPrice: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: '20px',
  },
  paymentOptions: {
    margin: '30px 0',
    padding: '20px',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  radioGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '30px',
    color: '#555',
    fontSize: '16px',
  },
  paymentMethodOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '20px',
  },
  paymentMethodLabel: {
    display: 'inline-block',
    width: '18%',
    textAlign: 'center',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    transition: 'background-color 0.3s, border-color 0.3s',
  },
  paymentMethodLabelHover: {
    backgroundColor: 'grey',
    borderColor: 'black',
  },
  paymentMethodSelected: {
    backgroundColor: 'grey',
    color: '#fff',
    borderColor: 'black',
  },
  radioInput: {
    marginRight: '10px',
  },
  paymentMethodImg: {
    width: '50px',
    height: 'auto',
  },
  paymentMethodText: {
    marginTop: '10px',
    fontSize: '14px',
  },
  cardDetails: {
    marginTop: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  inputLabel: {
    display: 'block',
    marginBottom: '15px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  expirationDate: {
    display: 'flex',
    gap: '10px',
  },
  select: {
    width: '100px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  totalAmount: {
    marginTop: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  totalAmountText: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  totalAmountValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'red',
  },
  confirmButton: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#ff4d4f',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  },
  confirmButtonHover: {
    backgroundColor: 'black',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  errorText:{
  color:'red'
  }
};

export default PayConfirm;
