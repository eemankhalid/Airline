import React from 'react';

const GroupTravelRequirements = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>
        Group Booking Requirements
        <div style={styles.headingUnderline}></div>
      </h3>
      <ul style={styles.list}>
        <li>
          To book, get in touch with either your <a href="#" style={styles.link}>local InfinityWings office</a> or travel agent. We’ll tell you if Emirates Group Travel Service is available at your departure and arrival airports.
        </li>
        <li>Group travel services apply to groups of ten or more.</li>
        <li>Passengers must all be travelling together on the same flight and itinerary.</li>
        <li>Tell us your individual meal requirements at least 24 hours before flight departure, and preferably at the time of booking, so everyone can enjoy their meal of choice.</li>
        <li>Group seating arrangements need to be made at least seven days before flight departure.</li>
        <li>Personalised menus and headrest covers require at least 15 days’ notice.</li>
        <li>If your group has specific language requirements, let us know 30 days in advance, and we'll arrange the right cabin crew for the flight.</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #e0e0e0',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    maxWidth: '1180px',
    margin: '20px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#333',
    position: 'relative',
    paddingBottom: '10px',
  },
  headingUnderline: {
    width: '50px',
    height: '3px',
    backgroundColor: '#333333',
    position: 'absolute',
    bottom: '0',
    left: '0',
  },
  list: {
    marginTop: '20px',
    paddingLeft: '20px',
    lineHeight: '1.6',
    color: '#555',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default GroupTravelRequirements;
