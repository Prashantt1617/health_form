// models/FormData.js

const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  sleepHours: String,
  proteinMeals: String,
  prebioticsMeals: String,
  physicalActivity: String,
  energyDip: [String], 
  hobbiesTime: String,
  workSkillsUtilized: String,
  workComfort: String,
  workLifeBalance: String,
  extraTime: String,
  healthHabitBarriers: String,
  hydration: String,
  wellnessImprovement: String,
  newSkill: String
});

module.exports = mongoose.model('customers', formDataSchema);
