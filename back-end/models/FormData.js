const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true }, // The question text
  answer: { type: String, required: true },   // The selected answer text
});

const sectionSchema = new mongoose.Schema({
  section: { type: String, required: true },   // The section name (e.g., "PhysicalHealth")
  questions: { type: [questionSchema], required: true }, // Array of questions and answers
});

const formDataSchema = new mongoose.Schema({
  data: { type: [sectionSchema], required: true }, // Array of sections with questions and answers
});

module.exports = mongoose.model("FormData", formDataSchema);
