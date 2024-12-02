import React from "react";
import "./../styles/ques.css";
import Previous from "./previous";

const Questionnaire = ({
  currentSection,
  currentQuestion,
  handleAnswerChange,
  handleNextQuestion,
  isFirstQuestion,
  handlePreviousQuestion,
  isLastQuestion,
  answers
}) => {
  // Function to determine if the option is selected
  const isSelected = (score) => {
    return answers[currentSection]?.[currentQuestion.id] === score;
  };

  const handleRadioChange = (score) => {
    handleAnswerChange(currentSection, currentQuestion.id, score);
  };

  return (
    <div>
      <div>
        {/* <h2>{currentSection}</h2> */}
        <div className="prevt">
          <Previous
            handlePreviousQuestion={handlePreviousQuestion}
            disabled={isFirstQuestion}
          />
        </div>
        <div>
          <div className="ques">
            <p className="text-xl font-bold text-left text-orange-700 px-5 py-2 mt-45 mb-4">
              {currentQuestion.question}
            </p>
          </div>
          <div className="options flex flex-col text-left text-orange-700 text-lg font-semibold px-5">
            {currentQuestion.options.map((option, index) => {
              const score = currentQuestion.scores[index];
              return (
                <label className="option py-3 hover:bg-orange-200 rounded-xl" key={index}>
                  <input
                    className="mr-4 ml-4 checked:bg-orange-500"
                    type="radio"
                    name={`${currentSection}-${currentQuestion.id}`} // Ensure unique name for each question
                    value={score}
                    checked={isSelected(score)} // Dynamically check if the score is selected
                    onChange={() => handleRadioChange(score)} // Handle change
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        {!isLastQuestion && (
          <button
            className="navigation btnsub hover:bg-green-900 text-white text-lg font-bold"
            onClick={handleNextQuestion}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
