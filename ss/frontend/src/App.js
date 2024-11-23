import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PackagesTable from './components/PackagesTable';
import BookingsTable from './components/BookingsTable';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/packages" element={<PackagesTable />} />
                <Route path="/bookings" element={<BookingsTable />} />
            </Routes>
        </Router>
    );
};

export default App;
