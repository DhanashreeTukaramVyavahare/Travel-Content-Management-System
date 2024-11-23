const express = require('express');
const Booking = require('../models/Booking');
const Package = require('../models/Package');
const router = express.Router();

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('packageId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

// Add a new booking
router.post('/', async (req, res) => {
  const { customerName, contactInfo, packageId, numTravelers } = req.body;
  try {
    const booking = new Booking({ 
      customerName, 
      contactInfo, 
      packageId, 
      numTravelers 
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create booking' });
  }
});

// Update booking status
router.patch('/:id/status', async (req, res) => {
  const { bookingStatus } = req.body;
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id, 
      { bookingStatus },
      { new: true }
    );
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update booking status' });
  }
});

// Delete a booking
router.delete('/:id', async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete booking' });
  }
});

module.exports = router;
