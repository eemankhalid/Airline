// Models/Reservation.js
import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  reservationId: {
    type: String,
    required: true,
    unique: true,
  },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
