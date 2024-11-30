import React, { useState } from "react";
import Questionnaire from "./Questionnaire";
import Summary from "./Summary";
import "./App.css";
import axios from "axios";

function App() {
  const [answers, setAnswers] = useState({
    PhysicalHealth: {
      sleepHours: null,
      proteinMeals: null,
      prebioticsMeals: null,
      physicalActivityHours: null,
      stretchBreaks: null,
    },
    MentalEmotional: {
      energyDipTime: null,
      refreshedMorning: null,
      skillsUtilized: null,
      hobbiesTime: null,
      energyDipDuration: null,
    },
    LifestyleBalance: {
      timeForCommitments: null,
      extraHourPreference: null,
      healthyHabitBarriers: null,
    },
    HydrationFatigue: {
      waterBreakFrequency: null,
    },
    OverallWellness: {
      routineImprovement: null,
      lastSkillOrActivity: null,
    },
  });

  const [showSummary, setShowSummary] = useState(false);

  const sections = {
    PhysicalHealth: [
      {
        id: 1,
        question: "How many hours of sleep do you get on average per night?",
        options: [
          "Less than 5 hours",
          "5-6 hours",
          "7-8 hours",
          "More than 8 hours",
        ],
        scores: [0, 1, 2, 3],
      },
      {
        id: 2,
        question:
          "How many of your meals in a day include a good source of protein?",
        options: ["None", "1 meal", "2 meals", "3 or more meals"],
        scores: [0, 1, 2, 3],
      },
      // Add more Physical Health questions
      {
        id: 3,
        question:
          "How many of your meals in a day include a source of pro/prebiotics (e.g., yogurt, fermented foods)?",
        options: ["None", "1 meal", "2 meals", "3 or more meals"],
        scores: [0, 1, 2, 3],
      },
      {
        id: 4,
        question:
          "How many hours of physical activity (e.g., walking, exercise, sports) do you engage in over a week?",
        options: [
          "None",
          "Less than 2 hours",
          "2-4 hours",
          "More than 4 hours",
        ],
        scores: [0, 1, 2, 3],
      },
      {
        id: 5,
        question:
          "How often do you take short breaks to stretch or move around during your workday?",
        options: [
          "Rarely or never",
          "1-2 times a day",
          "3-5 times a day",
          "More than 5 times a day",
        ],
        scores: [0, 1, 2, 3],
      },
    ],
    MentalEmotional: [
      {
        id: 1,
        question:
          "When do you typically experience an energy dip during the day?",
        options: [
          "Morning (before lunch)",
          "Afternoon (after lunch)",
          "Evening (before dinner)",
          "I don’t experience energy dips",
        ],
        scores: [0, 1, 2, 3], // Adjust scores if needed
      },
      // Add more Mental and Emotional Well-Being questions
      {
        id: 2,
        question:
          "How often do you feel refreshed and energized when you wake up in the morning?",
        options: [
          "Every day",
          "4-6 days a week",
          "1-3 days a week",
          "Rarely or never",
        ],
        scores: [0, 1, 2, 3], // Adjust scores if needed
      },
      {
        id: 3,
        question:
          "How often do you feel that your skills and strengths are utilized effectively in your role?",
        options: [
          "Rarely or never",
          "Occasionally (1-2 times a week)",
          "Frequently (3-5 times a week)",
          "Almost every day",
        ],
        scores: [0, 1, 2, 3], // Adjust scores if needed
      },
      {
        id: 4,
        question:
          "How much time did you spend on hobbies or recreational activities in the past week?",
        options: [
          "Morning (before lunch)",
          "Afternoon (after lunch)",
          "Evening (before dinner)",
          "I don’t experience energy dips",
        ],
        scores: [0, 1, 2, 3], // Adjust scores if needed
      },
      {
        id: 5,
        question:
          "When do you typically experience an energy dip during the day?",
        options: ["None", "Less than 1 hour", "1-3 hours", "More than 3 hours"],
        scores: [0, 1, 2, 3], // Adjust scores if needed
      },
    ],
    LifestyleBalance: [
      {
        id: 1,
        question:
          "How often do you feel you have enough time for personal or family commitments?",
        options: [
          "Rarely or never",
          "Occasionally (1-2 times a week)",
          "Frequently (3-5 times a week)",
          "Almost every day",
        ],
        scores: [0, 1, 2, 3],
      },
      // Add more Lifestyle and Work-Life Balance questions
      {
        id: 2,
        question:
          "If you had one extra hour in your day, how would you prefer to spend it?",
        options: [
          "Exercising or engaging in physical activity",
          " Relaxing or sleeping",
          "Pursuing a hobby or learning something new",
          "Spending time with family or friends",
        ],
        scores: [0, 1, 2, 3], // Adjust scores if needed
      },
      {
        id: 3,
        question:
          "What stops you from consistently following through on healthy habits?",
        options: [
          "Lack of time",
          "Lack of motivation",
          "Unclear goals or plans",
          "Competing priorities (e.g., work, family)",
        ],
        scores: [0, 1, 2, 3], // Adjust scores if needed
      },
    ],

    HydrationFatigue: [
      {
        id: 1,
        question: "How often do you take a water break during your workday?",
        options: [
          "Rarely or never",
          "1-2 times a day",
          "3-5 times a day",
          " More than 5 times a day",
        ],
        scores: [0, 1, 2, 3],
      },
    ],

    OverallWellness: [
      {
        id: 1,
        question:
          "If you could change one thing about your daily routine to improve your well-being, what would it be?",
        options: [
          "Adding more physical activity",
          " Improving my eating habits",
          "Getting better sleep",
          "  Managing stress more effectively",
        ],
        scores: [0, 1, 2, 3],
      },
      {
        id: 2,
        question:
          "When was the last time you learned a new skill or tried something new (work-related or personal)?",
        options: [
          " Within the past week",
          " Within the past month",
          "Within the past 6 months",
          "  More than 6 months agos",
        ],
        scores: [0, 1, 2, 3],
      },
    ],
  };

  // Combine all questions into a single list
  const allQuestions = Object.entries(sections).flatMap(
    ([section, questions]) =>
      questions.map((question) => ({ ...question, section }))
  );

  const handleAnswerChange = (section, questionId, score) => {
    console.log(section);
    setAnswers((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [questionId]: score,
      },
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the backend
    try {
      const response = await axios.post(
        "http://localhost:5000/api/form/submit",
        answers
      );
      alert("Form submitted successfully!");
      console.log(response.data);
      setShowSummary(true); // Show summary after successful submission
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to submit the form");
    }
  };

  return (
    <div className="App">
      <h1>Health Assessment Form</h1>
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <Questionnaire
            questions={allQuestions}
            answers={answers} // Make sure this is the updated state
            onAnswerChange={handleAnswerChange}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <Summary answers={answers} questions={allQuestions} />
      )}
    </div>
  );
}

export default App;
