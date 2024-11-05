const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const { authenticateToken } = require('../middlewares/auth');
const { validateApplication } = require('../middlewares/validation');
const { validateRequest } = require('../middlewares/validateRequest');

// Application routes
router.post('/', authenticateToken, validateApplication, validateRequest, applicationController.createApplication); // Submit a new application
router.get('/:jobId', applicationController.getApplicationsByJob);                                                  // Retrieve all applications for a job
router.get('/filter', applicationController.filterApplications);                                                     // Filter applications

module.exports = router;
