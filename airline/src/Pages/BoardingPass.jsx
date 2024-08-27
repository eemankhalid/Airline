import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/BoardingPass.css';

const BoardingPass = () => {
  const { reservationId } = useParams();
  const [reservation, setReservation] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [seatsData, setSeatsData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await fetch(`http://localhost:8002/api/reservations/${reservationId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReservation(data);
      } catch (err) {
        console.error('Failed to fetch reservation:', err);
        setError('Failed to fetch reservation');
      }
    };

    fetchReservation();
  }, [reservationId]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:8002/api/bookings');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Error fetching bookings');
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    const fetchSeatsData = async (bookingId) => {
      try {
        const response = await fetch(`http://localhost:8002/api/selected-seats?bookingId=${bookingId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSeatsData(prevSeatsData => ({ ...prevSeatsData, [bookingId]: data }));
      } catch (error) {
        console.error(`Error fetching seats for booking ${bookingId}:`, error);
        setError('Error fetching seat data');
      }
    };

    // Fetch seats data for each booking
    bookings.forEach(booking => {
      fetchSeatsData(booking._id);
    });
  }, [bookings]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <br /><br /><br /><br /><br />
      {bookings.map((booking) => {
        const { fromCountry: from, toCountry: to, departDate: depart } = booking;
        const seats = seatsData[booking._id] || [];

        return (
          <div key={booking._id} className="boarding-pass">
            <div className="boarding-pass-left">
              <div className="barcode barcode-left"></div>
              <div className="economy-class"><strong>ULTIMATE PACKAGE</strong></div>
              <div className="boarding-pass-header">
                <i className="material-icons">airplane_ticket</i> BOARDING PASS
              </div>
              <div className="boarding-pass-info">
                <div className="flex">
                  <div>
                    <p>PASSENGER: <strong>{seats[0]?.passengerName || 'N/A'}</strong></p>

                    <p>FROM: <strong>{from}</strong></p>
                    <p>TO: <strong>{to}</strong></p>
                    <p>Reservation Id: <strong>{reservationId}</strong></p>
                    <p>DEPARTURE DATE: <strong>{depart}</strong></p>
                  </div>
                  
                  <div className="seat-box">
                    <p>SEAT</p>
                    <p><strong>{seats[0]?.seatNumber || 'N/A'}</strong></p>
                  </div>
                </div>

                <div className="gate-info">
                  <p>GATE CLOSES 15 MINUTES BEFORE DEPARTURE</p>
                </div>
              </div>
            </div>

            <div className="boarding-pass-right">
              <div className="barcode barcode-right"></div>
              <div className="boarding-pass-header">
                <i className="material-icons">airplane_ticket</i> BOARDING PASS
              </div>
              <div className="boarding-pass-info">
                <div>
                  <div className="margin">
                    <p>PASSENGER: <strong>{seats[0]?.passengerName || 'N/A'}</strong></p>
                    <p>FROM: <strong>{from}</strong></p>
                    <p>TO: <strong>{to}</strong></p>
                    <p>SEAT: <strong>{seats[0]?.seatNumber || 'N/A'}</strong></p>
                    <p>DEPARTURE DATE: <strong>{depart}</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <br /><br />
      <br /><br /><br />
    </>
  );
};

export default BoardingPass;
