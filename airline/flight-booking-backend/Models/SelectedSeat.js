import mongoose from 'mongoose';

const selectedSeatSchema = new mongoose.Schema({
  passengerName: { type: String, required: true },
  seatNumber: { type: String, required: true },
 
});

const SelectedSeat = mongoose.model('SelectedSeat', selectedSeatSchema);

export default SelectedSeat;
