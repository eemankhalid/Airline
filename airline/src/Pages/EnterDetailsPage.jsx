import React from 'react'
import FlightHeader from "../components/FlightHeader";
import PessengerInformation from '../components/PessengerInformation'
import ContactInformation from '../components/ContactInformation'

const EnterDetailsPage = () => {
  return (
    <div>
        <br /><br />
        <FlightHeader />
        <br /><br />
      <PessengerInformation />
      <ContactInformation />
    </div>
  )
}

export default EnterDetailsPage
