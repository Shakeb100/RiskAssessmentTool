import React from 'react';
import Link from 'next/link';
import { useState } from "react";
import Checkbox from '../Checkbox';
import '../globals.css'


function Operational() { 
    const checkboxQuestions = [
      { label: "System outages have a significant impact on daily operations", value: "system" }, //Risk questions
      { label: "A data breach could disrupt daily operations", value: "operations" },
      { label: "Third-party vendors are critical to the organization's daily IT operations", value: "vendors" },
      { label: "The bank DOES NOT routinely tests its disaster recovery plan", value: "tests" },
      { label: "Operational risks are NOT frequently identified and reported within your organization", value: "risks" },
      { label: "Operational IT issues typically result from issues with vendors and third-party service providers", value: "third-party" },
    ];
    return (
      <>
      
        <title>Operational</title>
  
          <div>
            <h1>Operational Risks</h1>
          </div>
          <div>
          <Checkbox questions={checkboxQuestions} />
          </div>
  
  
      </>
    );
    }

export default Operational;