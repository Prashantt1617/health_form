import React from 'react';
import './../styles/ques.css';



const Bar = ({ currentQuestion, totalQuestions, color = 'green', color2 = 'gray' }) => {
    const progressPercentage = (currentQuestion / totalQuestions) * 100;


    return (
        <>
        <div className="progress-container">
            <div
                className="progress-bar"
                style={{
                    background: `linear-gradient(to right, ${color} ${progressPercentage}%, ${color2} ${progressPercentage}%)`,
                }}
                ></div>
        </div>
            <div className="progress-info">
                <span>{currentQuestion} of {totalQuestions}</span>
            </div>
                </>
    );
};

export default Bar;
