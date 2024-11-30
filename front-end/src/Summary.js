// src/Summary.js

import React from 'react';

const Summary = ({ formData }) => {
  return (
    <div>
      <h2>Form Submission Summary</h2>
      <ul>
        <li>Sleep: {formData.sleep}</li>
        <li>Protein Meals: {formData.proteinMeals}</li>
        <li>Probiotics Meals: {formData.probioticsMeals}</li>
        <li>Physical Activity: {formData.physicalActivity}</li>
        <li>Energy Dip: {formData.energyDip.join(', ')}</li>
        <li>Refreshed Morning: {formData.refreshedMorning}</li>
        <li>Strengths Utilized: {formData.strengthsUtilized}</li>
        <li>Hobby Time: {formData.hobbyTime}</li>
        <li>Comfort Sharing: {formData.shareComfort}</li>
        <li>Time for Personal: {formData.timeForPersonal}</li>
        {/* Add more fields as needed */}
      </ul>
    </div>
  );
};

export default Summary;
