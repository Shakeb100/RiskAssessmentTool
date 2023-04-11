"use client"; // this is a client component 👈🏽

import React, { useState } from "react";
import "./globals.css"; // import the CSS file

interface CheckboxQuestion {
  label: string;
  value: string;
}

interface CheckboxProps {
  questions: CheckboxQuestion[];
}

const Checkbox: React.FC<CheckboxProps> = ({ questions }) => {
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]); //array storing the number of selected
  const [showAssessmentScore, setShowAssessmentScore] = useState<boolean>(false); //to toggle display of assessment score
  
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const questionValue = event.target.value;
    if (selectedQuestions.includes(questionValue)) {
      setSelectedQuestions(selectedQuestions.filter((q) => q !== questionValue));
    } else {
      setSelectedQuestions([...selectedQuestions, questionValue]);
    }
  };

  const numSelectedQuestions = selectedQuestions.length;
  const totalQuestions = questions.length;

  const criticalThreshold = 0.75; //threshold for scoring
  const highRiskThreshold = 0.5;
  const moderateThreshold = 0.25;
    
  let assessmentScore: string;
    
  if (numSelectedQuestions === 0) { //risk assessment 
    assessmentScore = "No Risk";
  } else if (numSelectedQuestions / totalQuestions > criticalThreshold) {
    assessmentScore = "Critical";
  } else if (numSelectedQuestions / totalQuestions > highRiskThreshold) {
    assessmentScore = "High Risk";
  } else if (numSelectedQuestions / totalQuestions >= moderateThreshold) {
    assessmentScore = "Moderate Risk";
  } else {
    assessmentScore = "Low Risk";
  }
  
  // Get the element that displays the assessment score
const assessmentScoreElement = document.getElementById("assessment-score");

// Set the text content of the element
if (assessmentScoreElement) {
  assessmentScoreElement.textContent = assessmentScore;
  assessmentScoreElement.classList.add("assessment-score");
}
  

  const handleSeeResultsClick = () => {
    setShowAssessmentScore(true);
  }

  return (
    <div>
      {questions.map((question) => (
        <label key={question.value}>
          <input
            type="checkbox"
            value={question.value}
            checked={selectedQuestions.includes(question.value)}
            onChange={handleCheckboxChange}
            className="checkbox"
          />
          {question.label}
        </label>
      ))}
      {showAssessmentScore ? (
        <p className="assessment-score">
          {assessmentScore}
        </p>
      ) : (
        <button className="button rb" onClick={handleSeeResultsClick}>See Results</button>
      )}
    </div>
  );
};

export default Checkbox;
