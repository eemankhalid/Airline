import React from 'react';
import { useParams } from 'react-router-dom';

const BoardingPass = () => {
  const { reservationId } = useParams();

  return (
    <div>
      <h2>Boarding Pass</h2>
      <p>Reservation ID: {reservationId}</p>
      {/* Display additional boarding pass details here */}
    </div>
  );
};

export default BoardingPass;
