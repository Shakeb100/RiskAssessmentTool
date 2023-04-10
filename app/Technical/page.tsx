import React from 'react';
import Link from 'next/link';
import { useState } from "react";
import Checkbox from '../Checkbox';


function Technical() {
    const checkboxQuestions = [
      { label: "Hardware or software failure could result in significant IT downtime for the bank", value: "downtime" }, //Risk questions
      { label: "Cybersecurity attacks are a significant risk to the organization's IT systems.", value: "cyber" },
      { label: "Network segmentation is used to isolate sensitive systems from the rest of the network", value: "segmentation" },
      { label: "The organization DOES NOT regularly monitor its IT infrastructure for availability", value: "infrastructure" },
      { label: "Inadequate backup and recovery procedures could result in data loss", value: "backup" },
      { label: "Third-party vendors are a repeating source of technical issues", value: "third issues" },
      { label: "All software applications, operating systems, and firmware are NOT kept up-to-date with the latest security patches and updates to protect against known vulnerabilities", value: "vulnerabilities" },
      {label: "No intrusion-detection system (IDS) is employed to keep track of suspicious activity and monitor security threats.", value: "IDS"}
    ];
    return (
      <>
  
        <title>Technical</title>
  
          <div>
            <h1>Technical Risks</h1>
          </div>
          <div>
          <Checkbox questions={checkboxQuestions} />
          </div>
  
  
      </>
    );
    }
export default Technical;