import React, { useState } from "react";
import Questionnaire from "./components/Questionnaire.jsx";
import Summary from "./Summary";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import "./styles/tailwind.css";
import Bar from "./components/bar.jsx";
import "remixicon/fonts/remixicon.css";

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
      {
        id: 3,
        question:
          "How many of your meals in a day include a source of pro/prebiotics?",
        options: ["None", "1 meal", "2 meals", "3 or more meals"],
        scores: [0, 1, 2, 3],
      },
      {
        id: 4,
        question:
          "How many hours of physical activity do you engage in over a week?",
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
        scores: [0, 1, 2, 3],
      },
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
        scores: [0, 1, 2, 3],
      },
      {
        id: 3,
        question:
          "How often do you feel that your skills and strengths are utilized effectively in your role?",
        options: [
          "Rarely or never",
          "Occasionally",
          "Frequently",
          "Almost every day",
        ],
        scores: [0, 1, 2, 3],
      },
      {
        id: 4,
        question:
          "How much time did you spend on hobbies or recreational activities?",
        options: [
          "Less than an hour",
          "1-3 hours",
          "3-5 hours",
          "More than 5 hours",
        ],
        scores: [0, 1, 2, 3],
      },
      {
        id: 5,
        question: "How long is your energy dip?",
        options: ["None", "Less than 1 hour", "1-3 hours", "More than 3 hours"],
        scores: [0, 1, 2, 3],
      },
    ],
    LifestyleBalance: [
      {
        id: 1,
        question:
          "How often do you feel you have enough time for personal or family commitments?",
        options: ["Rarely", "Occasionally", "Frequently", "Always"],
        scores: [0, 1, 2, 3],
      },
      {
        id: 2,
        question:
          "If you had one extra hour in your day, how would you prefer to spend it?",
        options: ["Exercise", "Relax", "Learn something new", "Socialize"],
        scores: [0, 1, 2, 3],
      },
      {
        id: 3,
        question:
          "What stops you from consistently following through on healthy habits?",
        options: [
          "Lack of time",
          "Lack of motivation",
          "Unclear goals",
          "Other",
        ],
        scores: [0, 1, 2, 3],
      },
    ],
    HydrationFatigue: [
      {
        id: 1,
        question: "How often do you take a water break during your workday?",
        options: ["Rarely", "1-2 times", "3-5 times", "More than 5 times"],
        scores: [0, 1, 2, 3],
      },
    ],
    OverallWellness: [
      {
        id: 1,
        question:
          "If you could change one thing about your daily routine, what would it be?",
        options: [
          "Add physical activity",
          "Improve eating habits",
          "Get better sleep",
          "Manage stress",
        ],
        scores: [0, 1, 2, 3],
      },
      {
        id: 2,
        question: "When was the last time you learned a new skill?",
        options: [
          "Last week",
          "Last month",
          "Last 6 months",
          "More than 6 months ago",
        ],
        scores: [0, 1, 2, 3],
      },
    ],
  };



  const totalQuestions = Object.values(sections).reduce(
    (acc, section) => acc + section.length,
    0
  );
  const sectionNames = Object.keys(sections);
  const [currentSection, setCurrentSection] = useState(sectionNames[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (section, questionId, score) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [section]: {
        ...prevAnswers[section],
        [questionId]: score,
      },
    }));
  };

  const currentQuestionGlobalIndex =
    sectionNames
      .slice(0, sectionNames.indexOf(currentSection)) // Sections before the current section
      .reduce((sum, section) => sum + sections[section].length, 0) + // Sum of their question lengths
    currentQuestionIndex +
    1; // Add the current question index (1-based)

  const handleNextQuestion = (e) => {
    e.preventDefault();
    const currentSectionQuestions = sections[currentSection];

    if (currentQuestionIndex < currentSectionQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const currentSectionIndex = sectionNames.indexOf(currentSection);
      if (currentSectionIndex < sectionNames.length - 1) {
        setCurrentSection(sectionNames[currentSectionIndex + 1]);
        setCurrentQuestionIndex(0);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const handlePreviousQuestion = (e) => {
    e.preventDefault();
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      const currentSectionIndex = sectionNames.indexOf(currentSection);
      if (currentSectionIndex > 0) {
        const previousSection = sectionNames[currentSectionIndex - 1];
        setCurrentSection(previousSection);
        setCurrentQuestionIndex(sections[previousSection].length - 1);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if it's the last question
    const currentSectionQuestions = sections[currentSection];
    const isLastQuestion =
      currentSection === sectionNames[sectionNames.length - 1] &&
      currentQuestionIndex === currentSectionQuestions.length - 1;

    if (isLastQuestion) {
      // Prepare submission data
      const formattedData = Object.entries(answers).map(
        ([section, sectionAnswers]) => ({
          section,
          questions: sections[section].map((q) => ({
            question: q.question,
            answer:
              q.options[q.scores.indexOf(sectionAnswers[q.id])] ||
              "Not Answered",
          })),
        })
      );

      try {
        const response = await axios.post(
          "http://localhost:5000/api/form/submit",
          { data: formattedData }
        );
        // alert("Form submitted successfully!");
        console.log("Submission Data:", formattedData);
        console.log(response.data);
        setIsSubmitted(true); // Mark form as submitted
      } catch (error) {
        console.error("Error submitting the form:", error);
        // alert("Failed to submit the form");
      }
    }
  };

  const currentSectionQuestions = sections[currentSection];
  const currentQuestion = currentSectionQuestions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion =
    currentSection === sectionNames[sectionNames.length - 1] &&
    currentQuestionIndex === currentSectionQuestions.length - 1;

  if (isSubmitted) {
    return (
      <div className="App">
        <Header />
        <Summary answers={answers} /> {/* Ensure answers are passed here */}
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <h1 className="font-bold text-xl p-5 text-gray-500">Health Assessment</h1>
      <Bar
        currentQuestion={currentQuestionGlobalIndex}
        totalQuestions={totalQuestions}
        color="#16a34a"
        color2="#e9e2e2"
      />

      <form onSubmit={handleSubmit}>
        <Questionnaire
          currentSection={currentSection}
          currentQuestion={currentQuestion}
          handleAnswerChange={handleAnswerChange}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
          isLastQuestion={isLastQuestion}
          isFirstQuestion={isFirstQuestion}
          answers={answers}
        />
        {isLastQuestion && (
          <button
            type="submit"
            className="btnsub bg-green-600 text-white text-lg font-bold mt-4"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default App;
