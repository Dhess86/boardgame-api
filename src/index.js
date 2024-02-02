// src/index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongoUri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/boardgames', require('./routes/boardgameRoutes'));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
