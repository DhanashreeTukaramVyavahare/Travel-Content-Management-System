const Package = require('../models/Package');

// Create a Package
exports.createPackage = async (req, res) => {
    try {
        const newPackage = new Package(req.body);
        await newPackage.save();
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get All Packages
exports.getPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update a Package
exports.updatePackage = async (req, res) => {
    try {
        const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPackage);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a Package
exports.deletePackage = async (req, res) => {
    try {
        await Package.findByIdAndDelete(req.params.id);
        res.json({ message: 'Package deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
