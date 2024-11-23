import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PackagesTable.css';


const PackagesTable = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/admin/packages');
        setPackages(data);
      } catch (error) {
        console.error('Failed to fetch packages:', error);
      }
    };
    fetchPackages();
  }, []);

  return (
    <div className="container">
      <h1>Travel Packages</h1>
      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg._id} className="package-card">
            <img src={pkg.image} alt={`${pkg.title}`} className="package-image" />
            <h2>{pkg.title}</h2>
            <p><strong>Destination:</strong> {pkg.destination}</p>
            <p><strong>Description:</strong> {pkg.description}</p>
            <p><strong>Price:</strong> ${pkg.price}</p>
            <p><strong>Available Dates:</strong> {pkg.availableDates}</p>
            <p><strong>Max Travelers:</strong> {pkg.maxTravelers}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesTable;
