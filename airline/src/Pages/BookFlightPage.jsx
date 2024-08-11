import React from 'react'
import Hero2 from '../components/Hero2'
import FlightBooking from '../components/FlightBooking'
import img1 from '../assets/img/banner-7.png';
const BookFlightPage = () => {
 

  return (
    <div>
       <Hero2 
        pageName="Book Your Flight with Ease" 
        subText="Booking with Infinity Wings is a breeze. Choose your destination, select your flight, and enjoy a seamless experience tailored to your needs. Ready to fly? Let’s get you on board."
        image={img1} // Use the imported image
      />
      <div style={{ margin: '0 auto', width: '98%' }}>
          <FlightBooking />
        </div>
    </div>
  )
}

export default BookFlightPage
