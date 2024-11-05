const express = require('express');
const connectDB = require('./config/database');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const app = express();
require('dotenv').config();

app.use(express.json());

// Connect to MongoDB
connectDB();

// Welcome Route
app.get('/', (req, res) => {
    res.send('Welcome to the Job Board API! Use /api/auth for authentication, /api/jobs for job listings, and /api/applications for candidate applications.');
  });

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/jobs', jobRoutes);  // Job routes
app.use('/api/applications', applicationRoutes); // Application routes

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
