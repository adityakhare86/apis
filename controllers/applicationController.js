const Application = require('../models/Application');

// Submit a candidate application
exports.createApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Retrieve all applications for a specific job
exports.getApplicationsByJob = async (req, res) => {
  try {
    const applications = await Application.find({ appliedJobId: req.params.jobId });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Filter applications by candidate name, status, or experience
exports.filterApplications = async (req, res) => {
  try {
    const { candidateName, status, experience } = req.query;
    const filter = {};

    if (candidateName) filter.candidateName = new RegExp(candidateName, 'i');
    if (status) filter.status = status;
    if (experience) filter.experience = { $gte: experience };

    const applications = await Application.find(filter);
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
