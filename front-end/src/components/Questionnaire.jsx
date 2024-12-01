// Questionnaire.jsx
import React from 'react';
import "./../styles/ques.css";
const Questionnaire = ({
  currentSection,
  currentQuestion,
  handleAnswerChange,
  handleNextQuestion,
  showSubmitButton,
  handleSubmit,

}) => {
  const isLastQuestion = showSubmitButton;
  return (
    <div>
      <div>
        <h2>{currentSection}</h2>
        <div>
          <div className="ques">
            <p className='text-xl font-bold text-left text-orange-700 px-10 mt-45 mb-4'>{currentQuestion.question}</p>
          </div>
          <div className="options flex flex-col text-left text-orange-700 text-lg font-semibold px-5">
            {currentQuestion.options.map((option, index) => (
              <label className='option py-3 hover:bg-orange-200 rounded-xl' key={index}>
                <input
                  className='mr-4 ml-4 checked:bg-orange-500'
                  type="radio"

                  name={`${currentSection}-${currentQuestion.id}`}
                  value={currentQuestion.scores[index]}
                  onChange={() =>
                    handleAnswerChange(
                      currentSection,
                      currentQuestion.id,
                      currentQuestion.scores[index]
                    )
                  }
                />
                {option}
              </label>
            ))}
          </div>

        </div>
        <button onClick={handleNextQuestion} className='btnsub bg-green-600 text-white text-lg font-bold'>
          {isLastQuestion ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
