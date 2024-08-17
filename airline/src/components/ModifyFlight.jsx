import React, { useState } from 'react';
import '../css/ModifyFlight.css'

const ModifyFlight = () => {
    const [reservationNumber, setReservationNumber] = useState('');
    const [lastName, setLastName] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Handle form submission
        console.log({
            reservationNumber,
            lastName,
            departureDate
        });

        // Reset the form fields
        setReservationNumber('');
        setLastName('');
        setDepartureDate('');
    };

    return (
        <div className="container">
            <br/><br/><br/>
            <h1>Manage <span className="highlight">booking</span></h1>
            <h2>Modify flight</h2>
            <p>
                Have your travel plans changed? Do you want to modify the day of travel or even the destination of your trip? You may do so easily and online as long as you make the changes 24 hours prior to your flight.
            </p>
            <p>
                Alterations are subject to <a href="#">modification charges</a> and airfare difference.
            </p>
            <p>
                You can modify instantly online through the below form or by contacting our <a href="#">call center</a>, visiting our <a href="#">sales offices</a> or travel partners.
            </p>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="reservation-number">Reservation Number</label>
                    <input
                        type="text"
                        id="reservation-number"
                        name="reservation-number"
                        value={reservationNumber}
                        onChange={(e) => setReservationNumber(e.target.value)}
                        required
                    />

                    <label htmlFor="last-name">Contact Person Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label htmlFor="departure-date">Departure Date</label>
                    <input
                        type="date"
                        id="departure-date"
                        name="departure-date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        required
                    />

                    <button type="submit">Continue</button>
                </form>
            </div>
        </div>
    );
};

export default ModifyFlight;
