const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { authenticateToken } = require('../middlewares/auth');

// Job listing routes
router.post('/', authenticateToken, jobController.createJob);         // Add new job
router.get('/', jobController.getAllJobs);                            // Retrieve all jobs without filters
router.get('/filter', jobController.getFilteredJobs);                 // Retrieve jobs with filters
router.get('/search', jobController.searchJobs);                      // Search jobs by keyword in title or description
router.put('/:id', authenticateToken, jobController.updateJob);       // Update a job
router.delete('/:id', authenticateToken, jobController.deleteJob);    // Delete a job

module.exports = router;
