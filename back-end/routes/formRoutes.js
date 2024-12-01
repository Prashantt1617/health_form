// routes/formRoutes.js

const express = require('express');
const router = express.Router();  // Declare router here

const FormData = require('../models/FormData'); // Assuming you have the FormData model

// POST route for form submission
router.post('/submit', async (req, res) => {
  const formData = req.body;
  try {
    const newFormData = new FormData(formData);
    await newFormData.save();
    res.status(201).json({ message: 'Form submitted successfully!', data: newFormData });
  } catch (err) {
    console.log("error",err);
    res.status(400).json({ error: 'Error submitting form', details: err.message });
  }
});

module.exports = router;  // Export the router at the end
