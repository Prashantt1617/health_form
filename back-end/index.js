// server.js (Backend server for handling requests)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes'); // Import the route file correctly

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://prashant123:Prashant1617@cluster0.yhqkhv1.mongodb.net/health_form", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// API Routes
app.use('/api/form', formRoutes);  // Using the imported routes

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
