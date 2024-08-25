import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Booking from './Models/Booking.js';
import SelectedMeal from './Models/SelectedMeal.js';

import User from './Models/User.js';  // Import the User model


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
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

