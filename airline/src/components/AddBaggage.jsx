
import React from 'react';
import FlightHeader from '../components/FlightHeader';

const AddBaggage = () => {
  const styles = {
    container: {
      padding: '20px',
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: '#f7f7f7',
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      borderBottom: '1px solid #ddd',
      paddingBottom: '10px',
    },
    headerTitle: {
      fontSize: '1.5rem',
      color: '#333',
      fontWeight: '600',
    },
    headerSubtitle: {
      fontSize: '1rem',
      color: '#555',
    },
    skipLink: {
      color: '#6c757d',  // Changed to grey
      textDecoration: 'none',
      fontWeight: '500',
    },
    contentContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    baggageSection: {
      flex: 3,
      marginRight: '20px',
    },
    baggageCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: '20px',
      marginBottom: '20px',
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #eee',
      paddingBottom: '10px',
      marginBottom: '15px',
    },
    passengerName: {
      fontSize: '1.125rem',
      color: '#333',
      fontWeight: '500',
    },
    closeBtn: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#999',
      cursor: 'pointer',
      fontSize: '1.25rem',
    },
    baggageInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    },
    baggageIcon: {
      fontSize: '2rem',
      color: '#007bff',
      marginRight: '15px',
    },
    baggageDetails: {
      fontSize: '1rem',
      color: '#444',
    },
    included: {
      color: '#28a745',
      fontWeight: '500',
      marginLeft: '10px',
    },
    checkedBaggage: {
      marginTop: '20px',
    },
    note: {
      fontSize: '0.875rem',
      color: '#888',
      marginBottom: '10px',
    },
    baggageSummary: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: '20px',
    },
    summaryTitle: {
      fontSize: '1.25rem',
      color: '#333',
      fontWeight: '600',
      marginBottom: '20px',
    },
    summaryItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
      fontSize: '1rem',
      color: '#555',
    },
    confirmButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#6c757d', // Changed to grey
      color: 'white',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
      textAlign: 'center',
    },
    confirmButtonHover: {
      backgroundColor: '#5a6268',  // Darker grey for hover
    },
  };

  return (
    <>
      <FlightHeader />
      <div style={styles.container}>
        <div style={styles.headerContainer}>
          <div>
            <div style={styles.headerTitle}>Select baggage for your trip</div>
          </div>
          <a href="#" style={styles.skipLink}>Skip Baggage Selection</a>
        </div>

        <div style={styles.contentContainer}>
          <div style={styles.baggageSection}>
            <div style={styles.baggageCard}>
              <div style={styles.cardHeader}></div>
              <div style={styles.baggageInfo}>
                <div style={styles.baggageIcon}>🎒</div>
                <div style={styles.baggageDetails}>
                  <strong>1 Hand baggage</strong> - 10kg
                  <span style={styles.included}>Included</span>
                  <p>You can carry a cabin trolley bag with a maximum weight of 10 kg that can be placed in the overhead cabin.</p>
                </div>
              </div>
              <div style={styles.baggageInfo}>
                <div style={styles.baggageIcon}>🧳</div>
                <div style={styles.baggageDetails}>
                  <strong>Checked baggage</strong>
                  <span style={styles.included}>Free</span>
                  <p style={styles.note}>It may be <strong>10 times cheaper</strong> to book sufficient baggage allowance now than paying excess fees at the airport.</p>
                  <p><strong>30 Kg Total in 2 Pieces</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.baggageSummary}>
            <h4 style={styles.summaryTitle}>Baggages</h4>
            <div style={styles.summaryItem}>
              <span>KHI to DOH</span>
              <span>PKR 0</span>
            </div>
            <div style={styles.summaryItem}>
              <span>Ms. amna ahad</span>
              <span>30 Kg</span>
            </div>
            <button
              style={styles.confirmButton}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.confirmButtonHover.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.confirmButton.backgroundColor}
            >
              Confirm selection
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBaggage;
