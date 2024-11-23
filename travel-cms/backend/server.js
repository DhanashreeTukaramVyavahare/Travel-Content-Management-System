const express = require('express'); // Import Express
const app = express(); // Create an Express app
const cors = require('cors'); // Import and use CORS middleware
const mongoose = require('mongoose'); // Import mongoose to connect to MongoDB (if needed)

// Middleware
app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// MongoDB Connection (optional, if you're planning to use MongoDB in the future)
mongoose.connect('mongodb://localhost:27017/travel-cms', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB:', err));

// Sample packages data
const packages = [
  { _id: "1", destination: "Paris", title: "Paris Getaway", description: "A 5-day tour including Eiffel Tower visits.", price: 1500, availableDates: "2024-12-01 to 2024-12-10", maxTravelers: 20 },
  { _id: "2", destination: "New York", title: "New York City Tour", description: "Explore New York's major attractions with a guided tour.", price: 1200, availableDates: "2024-11-10 to 2024-11-20", maxTravelers: 25 },
  { _id: "3", destination: "Tokyo", title: "Tokyo Adventure", description: "Discover the beauty of Japan with a visit to Mount Fuji and local temples.", price: 1800, availableDates: "2024-10-05 to 2024-10-15", maxTravelers: 15 },
  { _id: "4", destination: "London", title: "London Escape", description: "Visit iconic sites like Buckingham Palace and the Tower of London.", price: 1400, availableDates: "2024-11-01 to 2024-11-10", maxTravelers: 30 },
  { _id: "5", destination: "Sydney", title: "Sydney Explorer", description: "A tour through the Sydney Opera House and the Great Barrier Reef.", price: 1700, availableDates: "2024-09-20 to 2024-09-30", maxTravelers: 18 },
  { _id: "6", destination: "Rome", title: "Roman Holiday", description: "Explore ancient Roman ruins, Vatican City, and delicious cuisine.", price: 1600, availableDates: "2024-12-05 to 2024-12-15", maxTravelers: 22 },
  { _id: "7", destination: "Dubai", title: "Dubai Luxury Tour", description: "Visit the Burj Khalifa, Dubai Mall, and desert safaris.", price: 2200, availableDates: "2024-08-10 to 2024-08-20", maxTravelers: 30 },
  { _id: "8", destination: "Barcelona", title: "Barcelona Getaway", description: "A trip to the Sagrada Familia and the beaches of Costa Brava.", price: 1500, availableDates: "2024-09-01 to 2024-09-10", maxTravelers: 28 },
  { _id: "9", destination: "Istanbul", title: "Istanbul Discovery", description: "Explore the rich culture of Istanbul, with a visit to the Blue Mosque and Bosphorus.", price: 1400, availableDates: "2024-07-10 to 2024-07-20", maxTravelers: 25 },
  { _id: "10", destination: "Amsterdam", title: "Amsterdam Adventure", description: "A boat tour through the canals, visit to Anne Frank House, and local museums.", price: 1300, availableDates: "2024-06-01 to 2024-06-10", maxTravelers: 20 },
];

// Sample booking data
const bookings = [
  { _id: "1", customerName: "John Doe", contactInfo: "john.doe@example.com", selectedPackage: "Paris Getaway", numTravelers: 2, bookingStatus: "Pending" },
  { _id: "2", customerName: "Jane Smith", contactInfo: "jane.smith@example.com", selectedPackage: "New York City Tour", numTravelers: 4, bookingStatus: "Confirmed" },
  { _id: "3", customerName: "Alice Johnson", contactInfo: "alice.j@example.com", selectedPackage: "Tokyo Adventure", numTravelers: 1, bookingStatus: "Pending" },
  { _id: "4", customerName: "Bob Brown", contactInfo: "bob.brown@example.com", selectedPackage: "London Escape", numTravelers: 3, bookingStatus: "Cancelled" },
  { _id: "5", customerName: "Charlie Davis", contactInfo: "charlie.d@example.com", selectedPackage: "Sydney Explorer", numTravelers: 5, bookingStatus: "Confirmed" },
  { _id: "6", customerName: "Emily White", contactInfo: "emily.w@example.com", selectedPackage: "Roman Holiday", numTravelers: 2, bookingStatus: "Pending" },
  { _id: "7", customerName: "Frank Harris", contactInfo: "frank.h@example.com", selectedPackage: "Dubai Luxury Tour", numTravelers: 6, bookingStatus: "Confirmed" },
  { _id: "8", customerName: "Grace Lee", contactInfo: "grace.l@example.com", selectedPackage: "Barcelona Getaway", numTravelers: 3, bookingStatus: "Pending" },
  { _id: "9", customerName: "Henry Kim", contactInfo: "henry.k@example.com", selectedPackage: "Istanbul Discovery", numTravelers: 4, bookingStatus: "Cancelled" },
  { _id: "10", customerName: "Ivy Wilson", contactInfo: "ivy.w@example.com", selectedPackage: "Amsterdam Adventure", numTravelers: 2, bookingStatus: "Confirmed" },
];

// Routes
app.get('/api/admin/packages', (req, res) => res.json(packages)); // Get all packages
app.get('/api/admin/bookings', (req, res) => res.json(bookings)); // Get all bookings

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
