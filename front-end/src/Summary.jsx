import React from "react";
import { energySnapshot } from "./components/data";

const Summary = ({ answers }) => {
  console.log("answers", answers);
  // Physical Health Section - Summary
  const physicalHealthSummary = [
    {
      score: answers.PhysicalHealth[4],
      message:
        answers.PhysicalHealth[4] >= 2
          ? "You're staying active with regular physical activity. Great job!"
          : "Try to get at least 4 hours of physical activity per week to boost fitness.",
    },
    {
      score: answers.PhysicalHealth[1],
      message:
        answers.PhysicalHealth[1] >= 2
          ? "You're getting enough sleep to stay energized and healthy."
          : "Aim for 7-8 hours of sleep each night to feel refreshed and energized.",
    },
    {
      score: answers.PhysicalHealth[2],
      message:
        answers.PhysicalHealth[2] >= 2
          ? "You're including enough protein in your meals. Keep it up!"
          : "Add more protein to your meals, such as eggs, lentils, or nuts.",
    },
    {
      score: answers.PhysicalHealth[3],
      message:
        answers.PhysicalHealth[3] >= 2
          ? "You're incorporating probiotics into your meals. Good work!"
          : "Try adding yogurt or fermented foods to your diet to improve gut health.",
    },
    {
      score: answers.PhysicalHealth[5],
      message:
        answers.PhysicalHealth[5] >= 2
          ? "You're taking regular breaks to stretch and move around. Excellent!"
          : "Take short breaks every hour to reduce fatigue.",
    },
    {
      score: answers.HydrationFatigue[1],
      message:
        answers.HydrationFatigue[1] >= 2
          ? "You're staying well-hydrated throughout the day. Great work!"
          : "Make sure to drink water regularly to stay hydrated.",
    },
  ];

  // Separate messages based on scores
  const strengths = physicalHealthSummary
    .filter((item) => item.score >= 2)
    .map((item) => item.message);

  const focusAreas = physicalHealthSummary
    .filter((item) => item.score < 2)
    .map((item) => item.message);

  // Work-Life Balance Section - Summary
  const workLifeBalanceScore =
    parseInt(answers.MentalEmotional[4]) +
    parseInt(answers.LifestyleBalance[1]) +
    parseInt(answers.OverallWellness[2]);

    const getworkColor = (score) => {
      console.log("sc", score);
  
      if (score <= 3) {
        return "red";
      } else if (score <= 6) {
        return "yellow";
      } else if (score <= 9) {
        return "green";
      } else {
        return "blue";
      }
    };

  let workLifeBalanceMessage = "";
  if (workLifeBalanceScore <= 3) {
    workLifeBalanceMessage = (
      <div>
        <p>
          Insight: "You may be over-prioritizing work at the expense of personal
          time and self-care."
        </p>
        <p>Actionable Steps:</p>
        <ul>
          <li>
            Schedule at least one recreational activity this week (e.g.,
            reading, walking, or hobbies).
          </li>
          <li>Block specific time for family or personal commitments.</li>
        </ul>
      </div>
    );
  } else if (workLifeBalanceScore <= 6) {
    workLifeBalanceMessage = (
      <div>
        <p>
          Insight: "You're managing a fair balance but could invest more in
          self-care and personal development."
        </p>
        <p>Actionable Steps:</p>
        <ul>
          <li>
            Dedicating 30 minutes daily to hobbies or learning something new.
          </li>
          <li>
            Plan a day in the next month solely for family or personal growth.
          </li>
        </ul>
      </div>
    );
  } else {
    workLifeBalanceMessage = (
      <div>
        <p>
          Insight: "You're prioritizing self-care and personal growth
          effectively. Keep it up!"
        </p>
        <p>Actionable Steps:</p>
        <ul>
          <li>Continue exploring new activities or skills regularly.</li>
          <li>Share your strategies with others to inspire balance.</li>
        </ul>
      </div>
    );
  }

  // Energy Snapshot Section - Summary
  const energySnapshotScore =
    parseInt(answers.MentalEmotional[1]) + parseInt(answers.MentalEmotional[2]);

  const getColor = (score) => {
    console.log("sc", score);

    if (score <= 2) {
      return "red";
    } else if (score <= 4) {
      return "orange";
    } else if (score <= 6) {
      return "green";
    } else {
      return "blue";
    }
  };

  let energySnapshotMessage = [
    energySnapshot["1"][answers.MentalEmotional[1]],
    [energySnapshot["2"][answers.MentalEmotional[2]]],
  ];
  // if (energySnapshotScore <= 1) {
  //   greencolour
  //   energySnapshotMessage =energySnapshot[answers.MentalEmotional[1]]
  //   //  (
  //   //   <div>
  //   //     <p>Insight: Focus on improving your energy and sleep habits.</p>
  //   //     <p>Actionable Steps:</p>
  //   //     <ul>
  //   //       <li>Start your day with a balanced breakfast including protein and complex carbs.</li>
  //   //       <li>Improve your sleep quality and consistency.</li>
  //   //     </ul>
  //   //   </div>
  //   // );
  // } else if (energySnapshotScore <= 3) {
  //   energySnapshotMessage = (
  //     <div>
  //       <p>Insight: You're managing your energy and sleep reasonably well but could improve.</p>
  //       <p>Actionable Steps:</p>
  //       <ul>
  //         <li>Include healthy snacks or breaks during the day to maintain energy.</li>
  //         <li>Keep optimizing your sleep schedule.</li>
  //       </ul>
  //     </div>
  //   );
  // } else {
  //   energySnapshotMessage = (
  //     <div>
  //       <p>Insight: You're doing great in managing your energy levels. Keep up the healthy habits!</p>
  //       <p>Actionable Steps:</p>
  //       <ul>
  //         <li>Maintain your balanced diet and consistent sleep schedule.</li>
  //         <li>Experiment with new ways to further optimize energy levels.</li>
  //       </ul>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h2>Summary</h2>

      <h3 className="text-green-600 text-md font-semibold mt-4">Strengths</h3>
      <ul className="list-disc pl-5">
        {strengths.length > 0 ? (
          strengths.map((message, index) => <li key={index}>{message}</li>)
        ) : (
          <p>No strengths identified yet.</p>
        )}
      </ul>

      <h3 className="text-red-600 text-md font-semibold mt-4">Focus Areas</h3>
      <ul className="list-disc pl-5">
        {focusAreas.length > 0 ? (
          focusAreas.map((message, index) => <li key={index}>{message}</li>)
        ) : (
          <p>No focus areas identified yet.</p>
        )}
      </ul>

      <div className=" flex gap-2 align-middle w-full justify-center">
        <h3>Work-Life Balance</h3>
        <div
          className="w-4 h-4 rounded-full mt-1"
          style={{ backgroundColor: `${getworkColor(workLifeBalanceScore)}` }}
        ></div>
      </div>
      {workLifeBalanceMessage}
      <div className=" flex gap-2 align-middle w-full justify-center">
        <h3>Energy Snapshot</h3>
        <div
          className="w-4 h-4 rounded-full mt-1"
          style={{ backgroundColor: `${getColor(energySnapshotScore)}` }}
        ></div>
      </div>
      {energySnapshotMessage.map((msg, i) => (
        <p>{msg}</p>
      ))}
    </div>
  );
};

export default Summary;
