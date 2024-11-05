const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    candidateName: String,
    email: String,
    experience: Number,
    appliedJobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    status: { type: String, enum: ['pending', 'reviewed'], default: 'pending' },
  });
  module.exports = mongoose.model('Application', ApplicationSchema);
  