import React from 'react'
import Hero2 from '../components/Hero2'
import FlightBooking from '../components/FlightBooking'
import img1 from '../assets/img/banner-7.png';
const BookFlightPage = () => {
 

  return (
    <div>
       <Hero2 
        pageName="Flight Booking" 
        image={img1} // Use the imported image
      />
      <div style={{ margin: '0 auto', width: '98%' }}>
          <FlightBooking />
        </div>
    </div>
  )
}

export default BookFlightPage
