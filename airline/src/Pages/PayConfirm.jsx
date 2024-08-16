import React, { useState } from 'react';
import FlightHeader from '../components/FlightHeader';

const PayConfirm = () => {
  const [hoveredMethod, setHoveredMethod] = useState(null);

  const paymentMethods = [
    { name: 'mastercard', icon: 'https://cdn-icons-png.flaticon.com/512/733/733250.png' },
    { name: 'visa', icon: 'https://cdn-icons-png.flaticon.com/512/733/733247.png' },
    { name: 'link', icon: 'https://cdn-icons-png.flaticon.com/512/733/733275.png' },
    { name: 'nayapay', icon: 'https://cdn-icons-png.flaticon.com/512/733/733591.png' },
    { name: 'paylater', icon: 'https://cdn-icons-png.flaticon.com/512/747/747543.png' },
  ];

  return (
    <div style={styles.container}>
      <FlightHeader />
      <h1 style={styles.header}>Review and Pay for Your Trip</h1>

      <div style={styles.reservationSummary}>
        <h2 style={styles.sectionTitle}>Reservation Summary</h2>
        <p style={styles.toggleDetails}>Hide Details</p>

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

      <div style={styles.paymentOptions}>
        <h3 style={styles.sectionTitle}>Would You Like to Pay Using Your Air Rewards Points?</h3>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input type="radio" id="yes" name="points" value="yes" />
            Yes
          </label>
          <label style={styles.radioLabel}>
            <input type="radio" id="no" name="points" value="no" defaultChecked />
            No
          </label>
        </div>

        <h3 style={styles.sectionTitle}>Would You Like to Pay Using Voucher or Credit from Your Earlier Reservation?</h3>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input type="radio" id="voucher-yes" name="voucher" value="yes" />
            Yes
          </label>
          <label style={styles.radioLabel}>
            <input type="radio" id="voucher-no" name="voucher" value="no" defaultChecked />
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
              }}
              onMouseEnter={() => setHoveredMethod(method.name)}
              onMouseLeave={() => setHoveredMethod(null)}
            >
              <input type="radio" name="payment-method" value={method.name} style={styles.radioInput} />
              <img src={method.icon} alt={method.name} style={styles.paymentMethodImg} />
              <p style={styles.paymentMethodText}>{method.name.charAt(0).toUpperCase() + method.name.slice(1)} (PKR)</p>
            </label>
          ))}
        </div>
      </div>

      <div style={styles.cardDetails}>
        <label style={styles.inputLabel}>
          Card Number *
          <input type="text" placeholder="The 16 digits on front of your card" style={styles.input} />
        </label>
        <label style={styles.inputLabel}>
          Expiration Date *
          <div style={styles.expirationDate}>
            <select style={styles.select}>
              <option value="MM">MM</option>
              {/* Add actual months */}
            </select>
            <select style={styles.select}>
              <option value="YYYY">YYYY</option>
              {/* Add actual years */}
            </select>
          </div>
        </label>
        <label style={styles.inputLabel}>
          Security Code *
          <input type="text" placeholder="CVV2" style={styles.input} />
        </label>
        <label style={styles.inputLabel}>
          Name on Card *
          <input type="text" placeholder="Full name as on the card" style={styles.input} />
        </label>
      </div>

      <div style={styles.totalAmount}>
        <h3 style={styles.totalAmountTitle}>Total Amount Due</h3>
        <h2 style={styles.totalAmountValue}>PKR 231,955.64</h2>
        <button
          style={styles.confirmPaymentBtn}
          onMouseEnter={() => setHoveredMethod('confirm')}
          onMouseLeave={() => setHoveredMethod(null)}
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  reservationSummary: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '20px',
    marginBottom: '30px',
  },
  sectionTitle: {
    color: '#444',
    fontWeight: '600',
    marginBottom: '15px',
    fontSize: '18px',
  },
  toggleDetails: {
    textAlign: 'right',
    color: '#007bff',
    cursor: 'pointer',
    fontSize: '16px',
  },
  flightDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    color: '#555',
  },
  subHeader: {
    color: '#e84545',
    marginBottom: '10px',
    fontSize: '16px',
    fontWeight: '600',
  },
  text: {
    marginBottom: '10px',
  },
  totalPrice: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: '18px',
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
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#f7f7f7',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  paymentMethodLabelHover: {
    backgroundColor: '#e84545',
    color: '#ffffff',
    transform: 'scale(1.05)',
  },
  radioInput: {
    display: 'none',
  },
  paymentMethodImg: {
    width: '50px',
    height: '50px',
    marginBottom: '10px',
  },
  paymentMethodText: {
    fontSize: '14px',
    color: '#333',
  },
  cardDetails: {
    margin: '30px 0',
    padding: '20px',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  inputLabel: {
    display: 'block',
    marginBottom: '15px',
    color: '#333',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    boxSizing: 'border-box',
    fontSize: '16px',
  },
  expirationDate: {
    display: 'flex',
    gap: '10px',
  },
  select: {
    width: '48%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
  },
  totalAmount: {
    textAlign: 'center',
    marginTop: '30px',
  },
  totalAmountTitle: {
    color: '#555',
    fontSize: '18px',
  },
  totalAmountValue: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: '10px',
  },
  confirmPaymentBtn: {
    backgroundColor: '#e84545',
    color: '#fff',
    padding: '14px 28px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '18px',
    marginTop: '20px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
};

export default PayConfirm;
