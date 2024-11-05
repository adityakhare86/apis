const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const { authenticateToken } = require('../middlewares/auth');

// Application routes
router.post('/', authenticateToken, applicationController.createApplication);                    // Submit a candidate application
router.get('/filter', authenticateToken , applicationController.filterApplications);              // Filter applications by candidate name, status, or experience
router.get('/:jobId' , applicationController.getApplicationsByJob);            // Retrieve all applications for a job

module.exports = router;
