import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Booking from './Models/Booking.js';
import SelectedMeal from './Models/SelectedMeal.js';
import User from './Models/User.js';  // Import the User model
import Reservation from './Models/Resevation.js'; // Import the Reservation model
import SelectedSeat from './Models/SelectedSeat.js';
import jwt from 'jsonwebtoken';


// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8002;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Root route
app.get('/', (req, res) => {
  res.send('Flight Booking API');
});

// Route to handle booking creation
app.post('/api/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json({ bookingId: savedBooking._id, ...savedBooking._doc }); // Send booking ID back to client
  } catch (error) {
    res.status(400).json({ message: 'Error creating booking', error });
  }
});

// Route to fetch all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching bookings', error });
  }
});

// Route to handle selected meals
app.post('/api/selected-meals', async (req, res) => {
  try {
    const selectedMeals = req.body; // Array of meals, each with bookingId
    const savedMeals = await SelectedMeal.insertMany(selectedMeals);
    res.status(201).json(savedMeals);
  } catch (error) {
    res.status(400).json({ message: 'Error saving selected meals', error });
  }
});

// Route to handle group travel form data
app.post('/api/groupTravel', async (req, res) => {
    try {
        const groupTravelData = req.body; // Object representing group travel data
        const newGroupTravel = new GroupTravel(groupTravelData);
        const savedGroupTravel = await newGroupTravel.save();
        res.status(201).json(savedGroupTravel);
    } catch (error) {
        res.status(400).json({ message: 'Error saving group travel data', error });
    }
});
app.post('/api/charterTravel', async (req, res) => {
  try {
    const charterTravelData = req.body;
    const newCharterTravel = new CharterTravel(charterTravelData);
    const savedCharterTravel = await newCharterTravel.save();
    res.status(201).json(savedCharterTravel);
  } catch (error) {
    res.status(400).json({ message: 'Error saving charter travel data', error });
  }
});
//Route to handle user registration
app.post('/api/register', async (req, res) => {
  
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
});

app.post('/api/reservations', async (req, res) => {
  try {
    const { reservationId, bookingId } = req.body;
    console.log('Received bookingId:', bookingId);
    const newReservation = new Reservation({ reservationId, bookingId });
    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    console.error('Error saving reservation:', error);
    res.status(400).json({ message: 'Error saving reservation ID', error });
  }
});

// Check if reservation exists
app.post('/api/checkReservation', async (req, res) => {
  try {
    const { reservationId } = req.body;
    const reservation = await Reservation.findOne({ reservationId });

    if (reservation) {
      res.status(200).json({ exists: true, reservation });
    } else {
      res.status(404).json({ exists: false });
    }
  } catch (error) {
    console.error('Error checking reservation ID:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

app.get('/api/reservations/:reservationId', async (req, res) => {
  try {
    const { reservationId } = req.params;
    const reservation = await Reservation.findOne({ reservationId: 'RES655006' }).populate('bookingId');

// Store the bookingId in a constant
const bookingId = reservation.bookingId;

console.log('Booking ID:', bookingId);

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.status(200).json(reservation);
  } catch (error) {
    console.error('Error retrieving reservation:', error);
    res.status(500).json({ message: 'Error retrieving reservation', error });
  }
});

// Route to handle selected seats
app.post('/api/selected-seats', async (req, res) => {
  try {
    const { bookingId, seats } = req.body;

    if (!bookingId || !Array.isArray(seats)) {
      return res.status(400).json({ message: 'Invalid data format' });
    }

    // Map over the seats array to include the bookingId in each seat object
    const seatsWithBookingId = seats.map(seat => ({
      ...seat,
      bookingId,
    }));

    // Insert the seats with bookingId into the database
    const savedSeats = await SelectedSeat.insertMany(seatsWithBookingId);

    res.status(201).json(savedSeats);
  } catch (error) {
    console.error('Error saving selected seats:', error);
    res.status(400).json({ message: 'Error saving selected seats', error });
  }
});
app.post('/api/login', async (req, res) => {
  const { email, wingPointId } = req.body;

  try {
      console.log('Login attempt with:', { email, wingPointId });

      // Check if the user exists in the database
      const user = await User.findOne({ email, userId: wingPointId });
      console.log('Database query result:', user);

      if (!user) {
          console.log('User not found');
          return res.status(401).json({ message: 'Invalid email or WingPoint ID' });
      }

      // If user exists, generate a JWT token
      const token = jwt.sign(
          { userId: user._id, email: user.email },
          'your_secret_key', // Replace with your actual secret key
          { expiresIn: '1h' }
      );

      console.log('Login successful, token generated:', token);
      return res.json({ token });
  } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

app.get('/api/selected-seats/:bookingId', async (req, res) => {
  try {
    const { bookingId } = req.params;

    if (!bookingId) {
      return res.status(400).json({ message: 'Booking ID is required' });
    }

    // Fetch the selected seats from the database using the bookingId
    const selectedSeats = await SelectedSeat.find({ bookingId });


    if (!selectedSeats.length) {
      return res.status(404).json({ message: 'No seats found for this booking' });
    }

    res.status(200).json(selectedSeats);
  } catch (error) {
    console.error('Error retrieving selected seats:', error);
    res.status(500).json({ message: 'Error retrieving selected seats', error });
  }
});


// Route to fetch all selected seats
app.get('/api/selected-seats', async (req, res) => {
  try {
    // Fetch all selected seats from the database
    const selectedSeats = await SelectedSeat.find();

    if (selectedSeats.length === 0) {
      return res.status(404).json({ message: 'No seats found' });
    }

    res.status(200).json(selectedSeats);
  } catch (error) {
    console.error('Error fetching selected seats:', error);
    res.status(500).json({ message: 'Error fetching selected seats', error });
  }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

