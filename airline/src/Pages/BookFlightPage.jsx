import React from 'react'
import Hero from '../components/Hero'
import FlightBooking from '../components/FlightBooking'

const BookFlightPage = () => {
  const image = (
    <img 
      src="src/assets/img/banner-7.png" 
      alt="Group Travel" 
      className="hero-image" 
      style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
    />
  );

  return (
    <div>
      <Hero
      img={image}
      style={{ maxWidth: '900px', width: '100%', height: 'auto', objectFit: 'cover' }} 
      h4={'Book Your Flight with Ease'}
      h2={'Effortless Travel Planning'}
      p={"Booking with Infinity Wings is a breeze. Choose your destination, select your flight, and enjoy a seamless experience tailored to your needs. Ready to fly? Let’s get you on board"}
      />
      <div style={{ margin: '0 auto', width: '98%' }}>
          <FlightBooking />
        </div>
    </div>
  )
}

export default BookFlightPage
