import React from 'react';

const styles = {
  heroContainer: {
    position: 'relative',
    width: '100%',
    height: '500px', 
    padding: '0',
    margin: '0',  // Added margin 0 to remove any default margins
    overflow: 'hidden', // Hide overflow to prevent zoomed image from spilling
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Removed the animation property to make the image static
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and opacity
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroText: {
    color: 'white',
    fontSize: '3rem', // Increase the font size as needed
    fontWeight: 'bold',
  },
};

const Hero2 = ({ pageName, image }) => {
  return (
    <div style={styles.heroContainer}>
      <div style={{ ...styles.backgroundImage, backgroundImage: `url(${image})` }}></div>
      <div style={styles.overlay}>
        <h1 style={styles.heroText}>{pageName}</h1>
      </div>
    </div>
  );
};

export default Hero2;
