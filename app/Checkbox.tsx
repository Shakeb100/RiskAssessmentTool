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

  const Assessment =
  numSelectedQuestions / totalQuestions > 0.75
    ? "Warning: You have selected more than 3/4 of the available options."
    : null;

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
      <p>
        {numSelectedQuestions} out of {totalQuestions} questions selected
      </p>
      <p>
        {Assessment}
      </p>
    </div>
  );
};

export default Checkbox;



