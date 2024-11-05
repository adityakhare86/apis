const { body } = require('express-validator');

exports.validateJob = [
  body('title').notEmpty().withMessage('Job title is required'),
  body('description').notEmpty().withMessage('Job description is required'),
  body('skills').isArray({ min: 1 }).withMessage('At least one skill is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('experienceLevel').notEmpty().withMessage('Experience level is required'),
];

exports.validateApplication = [
  body('candidateName').notEmpty().withMessage('Candidate name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('experience').isInt({ min: 0 }).withMessage('Experience level must be a non-negative integer'),
  body('appliedJobId').notEmpty().withMessage('Applied job ID is required'),
  body('status').isIn(['pending', 'reviewed']).withMessage('Status must be "pending" or "reviewed"'),
];
