const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const Package = require('../models/Package');
const Booking = require('../models/Booking');

// Generate JWT
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

// Admin Login
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (admin && (await bcrypt.compare(password, admin.password))) {
        res.json({ token: generateToken(admin._id) });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

// CRUD Operations for Travel Packages
exports.getPackages = async (req, res) => {
    const packages = await Package.find();
    res.json(packages);
};

exports.addPackage = async (req, res) => {
    const newPackage = await Package.create(req.body);
    res.status(201).json(newPackage);
};

exports.updatePackage = async (req, res) => {
    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPackage);
};

exports.deletePackage = async (req, res) => {
    await Package.findByIdAndDelete(req.params.id);
    res.status(204).send();
};

// Booking Management
exports.getBookings = async (req, res) => {
    const bookings = await Booking.find().populate('packageId');
    res.json(bookings);
};

exports.updateBooking = async (req, res) => {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBooking);
};
