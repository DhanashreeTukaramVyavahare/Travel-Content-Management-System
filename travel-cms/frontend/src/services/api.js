import axios from 'axios';

const API_URL = 'http://localhost:5000/api/admin'; // Replace with your backend's base URL

// Existing exports
export const login = (credentials) => axios.post(`${API_URL}/login`, credentials);
export const getPackages = () => axios.get(`${API_URL}/packages`);
export const createPackage = (pkg) => axios.post(`${API_URL}/packages`, pkg);
export const updatePackage = (id, pkg) => axios.put(`${API_URL}/packages/${id}`, pkg);
export const deletePackage = (id) => axios.delete(`${API_URL}/packages/${id}`);

// Add getBookings function
export const getBookings = () => axios.get(`${API_URL}/bookings`);
