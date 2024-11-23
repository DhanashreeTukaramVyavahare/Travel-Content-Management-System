const mongoose = require('mongoose');
const Package = require('../models/packageModel'); // Adjust the path to your Package model
const dotenv = require('dotenv');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
  });

const packages = [
  {
    "_id": "1",
    "destination": "Paris",
    "title": "Paris Getaway",
    "description": "A beautiful 5-day tour of Paris including Eiffel Tower visits.",
    "price": 1500,
    "availableDates": "2024-12-01 to 2024-12-10",
    "maxTravelers": 20,
    image: "/images/download.png" 
  },
  {
    "_id": "2",
    "destination": "New York",
    "title": "New York City Tour",
    "description": "Explore New York's major attractions with a guided tour.",
    "price": 1200,
    "availableDates": "2024-11-10 to 2024-11-20",
    "maxTravelers": 25
  }
];

// Insert the data into MongoDB
const seedDatabase = async () => {
  try {
    await Package.deleteMany(); // Optional: Clear existing data
    await Package.insertMany(packages);
    console.log('Packages added successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error adding packages:', error);
    mongoose.connection.close();
  }
};

seedDatabase();
