import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <h1>Admin Dashboard</h1>
            <div className="d-flex gap-3">
                <Link to="/packages" className="btn btn-primary">Manage Travel Packages</Link>
                <Link to="/bookings" className="btn btn-secondary">Manage Bookings</Link>
            </div>
        </div>
    );
};

export default Dashboard;
