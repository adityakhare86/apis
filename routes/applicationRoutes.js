const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const { authenticateToken } = require('../middlewares/auth');

// Application routes
router.post('/', applicationController.createApplication);                    // Submit a candidate application
router.get('/:jobId', applicationController.getApplicationsByJob);            // Retrieve all applications for a job
router.get('/filter', applicationController.filterApplications);              // Filter applications by candidate name, status, or experience

module.exports = router;
