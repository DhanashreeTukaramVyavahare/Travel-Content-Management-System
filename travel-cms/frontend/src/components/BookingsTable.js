import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingsTable = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/admin/bookings');
        setBookings(data);
      } catch (error) {
        console.error('Failed to fetch bookings');
      }
    };
    fetchBookings();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/admin/bookings/${id}/status`, { bookingStatus: status });
      setBookings(bookings.map(booking => 
        booking._id === id ? { ...booking, bookingStatus: status } : booking
      ));
    } catch (error) {
      console.error('Failed to update booking status');
    }
  };

  return (
    <div className="container">
      <h1>Booking Management</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Contact Info</th>
            <th>Package</th>
            <th>Number of Travelers</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id}>
              <td>{booking.customerName}</td>
              <td>{booking.contactInfo}</td>
              <td>{booking.packageId?.title || 'Unknown Package'}</td>
              <td>{booking.numTravelers}</td>
              <td>{booking.bookingStatus}</td>
              <td>
                <button onClick={() => handleStatusChange(booking._id, 'Confirmed')} className="btn btn-success btn-sm">Confirm</button>
                <button onClick={() => handleStatusChange(booking._id, 'Cancelled')} className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTable;
