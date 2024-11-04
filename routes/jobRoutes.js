const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { authenticateToken } = require('../middlewares/auth');

// Job listing routes
router.post('/', authenticateToken, jobController.createJob);         // Add new job
router.get('/', jobController.getAllJobs);                            // Retrieve all jobs with filters
router.get('/:id', jobController.getJobById);                         // Get a specific job by ID
router.put('/:id', authenticateToken, jobController.updateJob);       // Update a job
router.delete('/:id', authenticateToken, jobController.deleteJob);    // Delete a job

module.exports = router;
