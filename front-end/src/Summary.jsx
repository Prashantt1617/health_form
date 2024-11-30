import React from "react";

function Summary({ answers, questions }) {
  // Calculate scores by section
  const scoresBySection = questions.reduce((acc, q) => {
    const score = answers[q.id] || 0;
    acc[q.section] = (acc[q.section] || 0) + score;
    return acc;
  }, {});

  const totalScore = Object.values(scoresBySection).reduce(
    (total, score) => total + score,
    0
  );

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Score: {totalScore}</p>
      <p>
        You answered all questions. Use this summary to reflect on your health
        and wellness goals.
      </p>
    </div>
  );
}

export default Summary;
