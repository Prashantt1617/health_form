// // src/Form.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     sleep: '',
//     proteinMeals: '',
//     probioticsMeals: '',
//     physicalActivity: '',
//     breaks: '',
//     energyDip: [],
//     refreshedMorning: '',
//     strengthsUtilized: '',
//     hobbyTime: '',
//     shareComfort: '',
//     timeForPersonal: '',
//     extraHourUse: '',
//     healthyHabitsObstacle: '',
//     waterBreaks: '',
//     changeForWellbeing: '',
//     learnNewSkill: '',
//   });

//   // Handle changes in form fields
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       if (checked) {
//         setFormData((prev) => ({
//           ...prev,
//           [name]: [...prev[name], value],
//         }));
//       } else {
//         setFormData((prev) => ({
//           ...prev,
//           [name]: prev[name].filter((item) => item !== value),
//         }));
//       }
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send data to the backend
//     try {
//       const response = await axios.post('http://localhost:5000/api/form/submit', formData);
//       alert('Form submitted successfully!');
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//       alert('Failed to submit the form');
//     }
//   };

//   return (
//     <div>
//       <h1>Health and Wellness Survey</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Sleep */}
//         <div>
//           <label>How many hours of sleep do you get on average per night?</label>
//           <select name="sleep" value={formData.sleep} onChange={handleChange} required>
//             <option value="">Select</option>
//             <option value="Less than 5 hours">Less than 5 hours</option>
//             <option value="5-6 hours">5-6 hours</option>
//             <option value="7-8 hours">7-8 hours</option>
//             <option value="More than 8 hours">More than 8 hours</option>
//           </select>
//         </div>

//         {/* Protein Meals */}
//         <div>
//           <label>How many of your meals in a day include a good source of protein?</label>
//           <select name="proteinMeals" value={formData.proteinMeals} onChange={handleChange} required>
//             <option value="">Select</option>
//             <option value="None">None</option>
//             <option value="1 meal">1 meal</option>
//             <option value="2 meals">2 meals</option>
//             <option value="3 or more meals">3 or more meals</option>
//           </select>
//         </div>

//         {/* Probiotics Meals */}
//         <div>
//           <label>How many of your meals in a day include a source of pro/prebiotics?</label>
//           <select name="probioticsMeals" value={formData.probioticsMeals} onChange={handleChange} required>
//             <option value="">Select</option>
//             <option value="None">None</option>
//             <option value="1 meal">1 meal</option>
//             <option value="2 meals">2 meals</option>
//             <option value="3 or more meals">3 or more meals</option>
//           </select>
//         </div>

//         {/* Physical Activity */}
//         <div>
//           <label>How many hours of physical activity do you engage in over a week?</label>
//           <select name="physicalActivity" value={formData.physicalActivity} onChange={handleChange} required>
//             <option value="">Select</option>
//             <option value="None">None</option>
//             <option value="Less than 2 hours">Less than 2 hours</option>
//             <option value="2-4 hours">2-4 hours</option>
//             <option value="More than 4 hours">More than 4 hours</option>
//           </select>
//         </div>

//         {/* Energy Dip */}
//         <div>
//           <label>When do you typically experience an energy dip during the day? (Select all that apply)</label>
//           <label>
//             <input
//               type="checkbox"
//               name="energyDip"
//               value="Morning (before lunch)"
//               checked={formData.energyDip.includes('Morning (before lunch)')}
//               onChange={handleChange}
//             />
//             Morning (before lunch)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="energyDip"
//               value="Afternoon (after lunch)"
//               checked={formData.energyDip.includes('Afternoon (after lunch)')}
//               onChange={handleChange}
//             />
//             Afternoon (after lunch)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="energyDip"
//               value="Evening (before dinner)"
//               checked={formData.energyDip.includes('Evening (before dinner)')}
//               onChange={handleChange}
//             />
//             Evening (before dinner)
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="energyDip"
//               value="I don’t experience energy dips"
//               checked={formData.energyDip.includes("I don’t experience energy dips")}
//               onChange={handleChange}
//             />
//             I don’t experience energy dips
//           </label>
//         </div>

//         {/* Other questions */}
//         {/* You can continue adding other fields in a similar manner */}

//         {/* Submit Button */}
//         <button type="submit">Submit Survey</button>
//       </form>
//     </div>
//   );
// };

// export default Form;
