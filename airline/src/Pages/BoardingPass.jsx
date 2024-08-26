import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/BoardingPass.css';

const BoardingPass = () => {
  const { reservationId } = useParams();

  return (
    <>
    <br/><br/><br/>
    <div className="boarding-pass">
      <div className="boarding-pass-info">
        <p><strong>NAME OF PASSENGER:</strong> [Passenger Name]</p>
        <p><strong>ORIGIN:</strong> [City] <span className="destination"> <strong>DESTINATION:</strong> [City]</span></p>
        <p><strong>DATE:</strong> [XX/XX/XXXX] <span className="time"><strong>TIME:</strong> [# AM/PM]</span></p>
        <p><strong>FLIGHT:</strong> [XX1234]<span className="time"><strong>Reservation Id:</strong> {reservationId}</span></p>
        <p className="seat-number"><strong>SEAT:</strong> [17B]</p>
      </div>
      <div className="boarding-pass-side-info">
        <div className="flight-code">ABC - ABC</div>
        <p><strong>TO:</strong> [Name]</p>
        <p><strong>FROM:</strong> [Name]</p>
      </div>
      {/* <div className="barcode">
      </div> */}
      <br/><br/><br/>
    </div>
    </>
  );
};

export default BoardingPass;
