import React, { useState, useEffect } from 'react';
import { addPackage, updatePackage, getPackages } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddPackage = () => {
    const [packageData, setPackageData] = useState({
        destination: '',
        title: '',
        description: '',
        price: '',
        availableDates: '',
        maxTravelers: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPackageData({ ...packageData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updatePackage(id, packageData);
                toast.success('Package updated successfully');
            } else {
                await addPackage(packageData);
                toast.success('Package added successfully');
            }
            navigate('/packages');
        } catch (error) {
            toast.error('Failed to save package');
        }
    };

    useEffect(() => {
        if (id) {
            const fetchPackage = async () => {
                try {
                    const { data } = await getPackages();
                    const existingPackage = data.find((pkg) => pkg._id === id);
                    if (existingPackage) setPackageData(existingPackage);
                } catch (error) {
                    toast.error('Failed to fetch package details');
                }
            };
            fetchPackage();
        }
    }, [id]);

    return (
        <div className="add-package">
            <h2>{id ? 'Edit Package' : 'Add New Package'}</h2>
            <form onSubmit={handleSubmit}>
                <input name="destination" value={packageData.destination} onChange={handleChange} placeholder="Destination" required />
                <input name="title" value={packageData.title} onChange={handleChange} placeholder="Title" required />
                <textarea name="description" value={packageData.description} onChange={handleChange} placeholder="Description" required />
                <input type="number" name="price" value={packageData.price} onChange={handleChange} placeholder="Price" required />
                <input name="availableDates" value={packageData.availableDates} onChange={handleChange} placeholder="Available Dates (comma-separated)" required />
                <input type="number" name="maxTravelers" value={packageData.maxTravelers} onChange={handleChange} placeholder="Max Travelers" required />
                <button type="submit">{id ? 'Update' : 'Add'} Package</button>
            </form>
        </div>
    );
};

export default AddPackage;
