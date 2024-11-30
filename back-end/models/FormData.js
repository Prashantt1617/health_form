// models/FormData.js

const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  PhysicalHealth: {
    sleepHours: String, // Question 1
    proteinMeals: String, // Question 2
    prebioticsMeals: String, // Question 3
    physicalActivityHours: String, // Question 4
    stretchBreaks: String, // Question 5
  },
  MentalEmotional: {
    energyDipTime: String, // Question 1
    refreshedMorning: String, // Question 2
    skillsUtilized: String, // Question 3
    hobbiesTime: String, // Question 4
    energyDipDuration: String, // Question 5
  },
  LifestyleBalance: {
    timeForCommitments: String, // Question 1
    extraHourPreference: String, // Question 2
    healthyHabitBarriers: String, // Question 3
  },
  HydrationFatigue: {
    waterBreakFrequency: String, // Question 1
  },
  OverallWellness: {
    routineImprovement: String, // Question 1
    lastSkillOrActivity: String, // Question 2
  },
});

module.exports = mongoose.model("FormData", formDataSchema);
