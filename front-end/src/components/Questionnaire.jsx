import React, { useState } from 'react';
import "./../styles/ques.css";
import Previous from './previous';

const Questionnaire = ({
  currentSection,
  currentQuestion,
  handleAnswerChange,
  handleNextQuestion,
  isFirstQuestion,
  handlePreviousQuestion,
  isLastQuestion

}) => {

  const [selectedIndex, setSelectedIndex] = useState(0);    

  return (
    <div>
      <div>
        <h2>{currentSection}</h2>
        <div className="prevt">
          <Previous
            handlePreviousQuestion={(e)=>{
              handlePreviousQuestion(e);
              
            }}
            disabled={isFirstQuestion}
          />
        </div>
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
                   {
                    handleAnswerChange(
                      currentSection,
                      currentQuestion.id,
                      currentQuestion.scores[index]
                    )
                    setSelectedIndex(index);
                   }
                  }
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {!isLastQuestion && (
          <button
            className='navigation btnsub bg-green-600 text-white text-lg font-bold'
            onClick={(e)=>
            {
              handleAnswerChange(
                currentSection,
                currentQuestion.id,
                currentQuestion.scores[selectedIndex]
              );
              handleNextQuestion(e);
            }
            }
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
