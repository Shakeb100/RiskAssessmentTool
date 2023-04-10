import React from 'react';
import Link from 'next/link';
import { useState } from "react";
import Checkbox from '../Checkbox';


function security() {
    const checkboxQuestions = [
      { label: "Physical security breaches are a significant risk to the organization", value: "breaches" }, //Risk questions
      { label: "Employees are NOT trained to recognize and prevent social engineering attacks.", value: "trained" },
      { label: "The organization DOES NOT complies with all regulatory requirements related to data privacy and security", value: "complies" },
      { label: "The organization DOES NOT regularly monitor its IT infrastructure for availability", value: "infrastructure" },
      { label: "No Vulnerability assessments are conducted on a daily basis", value: "condcucted" },
      { label: "Multi-factor authentication varies for all accounts with access to sensitive data or higher administrative control.", value: "2fa" },
      { label: "Least-privilege access controls are in place to ensure that personnel within NLNB only have access to what they need in order to do their job", value: "control" },
      {label: "There are no separate work computer for employees that they use solely to do their job at NLNB", value: "computers"}
    ];
    return (
      <>
  
        <title>Security</title>
  
          <div>
            <h1>Security Risks</h1>
          </div>
          <div>
          <Checkbox questions={checkboxQuestions} />
          </div>
  
  
      </>
    );
    }
export default security;