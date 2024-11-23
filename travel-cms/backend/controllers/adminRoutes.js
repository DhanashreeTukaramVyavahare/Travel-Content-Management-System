const express = require('express');
const { loginAdmin } = require('../controllers/authController');
const { createPackage, updatePackage, deletePackage, getPackages } = require('../controllers/packageController');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/login', loginAdmin);

router.get('/packages', verifyToken, getPackages);
router.post('/packages', verifyToken, createPackage);
router.put('/packages/:id', verifyToken, updatePackage);
router.delete('/packages/:id', verifyToken, deletePackage);

module.exports = router;
