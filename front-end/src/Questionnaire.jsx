import React from "react";

function Questionnaire({ questions, answers, onAnswerChange }) {
  return (
    <div>
      {questions.map((question) => (
        <div key={`${question.section}-${question.id}`} className="question">
          <p>{question.question}</p>
          {question.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={`${question.section}-${question.id}`} // Unique name for each question across sections
                value={option}
                // Check if the current question's answer matches the score for this option
                checked={answers?.[question.section]?.[question.id] === question.scores[index]}
                onChange={() => onAnswerChange(question.section, question.id, question.scores[index])}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Questionnaire;
