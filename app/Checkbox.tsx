"use client"; // this is a client component 👈🏽

import React, { useState } from "react";

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
  
  let assessmentScore: string;
  
  if (numSelectedQuestions === 0) { //risk assessment 
    assessmentScore = "No Risk";
  } else if (numSelectedQuestions / totalQuestions >= criticalThreshold) {
    assessmentScore = "Critical";
  } else if (numSelectedQuestions / totalQuestions > highRiskThreshold) {
    assessmentScore = "High Risk";
  } else {
    assessmentScore = "Low Risk";
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
          />
          {question.label}
        </label>
      ))}
      {showAssessmentScore ? (
        <p>
          {assessmentScore}
        </p>
      ) : (
        <button className="button" onClick={handleSeeResultsClick}>See Results</button>
      )}
    </div>
  );
};

export default Checkbox;
