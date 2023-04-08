import React from 'react';
import Link from 'next/link';
import { useState } from "react";
import Checkbox from '../Checkbox';


function Operational() {
    const checkboxQuestions = [
      { label: "Do you like cats?", value: "cats" }, //Risk questions
      { label: "Do you like dogs?", value: "dogs" },
      { label: "Do you like fish?", value: "fish" },
      { label: "Do you like birds?", value: "bird" },
  
    ];
    return (
      <>
  
        <title>Operational</title>
  
          <div>
            <h1>Operational</h1>
          </div>
          <div>
          <Checkbox questions={checkboxQuestions} />
          </div>
  
  
      </>
    );
    }

export default Operational;