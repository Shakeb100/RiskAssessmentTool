import React from 'react';
import Link from 'next/link';
import { useState } from "react";
import Checkbox from '../Checkbox';
import '../globals.css'
import { Montserrat} from 'next/font/google'

const mon = Montserrat({
  subsets: ['latin'],
  weight: '500'
})

function Total() {
    const checkboxQuestions = [
      { label: "Hardware or software failure could result in significant IT downtime for the bank", value: "downtime" }, //Risk questions
      { label: "Cybersecurity attacks are a significant risk to the organization's IT systems.", value: "cyber" },
      { label: "Network segmentation is used to isolate sensitive systems from the rest of the network", value: "segmentation" },
      { label: "The organization DOES NOT regularly monitor its IT infrastructure for availability", value: "infrastructure" },
      { label: "Inadequate backup and recovery procedures could result in data loss", value: "backup" },
      { label: "Third-party vendors are a repeating source of technical issues", value: "third issues" },
      { label: "All software applications, operating systems, and firmware are NOT kept up-to-date with the latest security patches and updates to protect against known vulnerabilities", value: "vulnerabilities" },
      {label: "No intrusion-detection system (IDS) is employed to keep track of suspicious activity and monitor security threats.", value: "IDS"},

      { label: "Sensitive NLNB business data is at risk in the event of a technology disruption", value: "disruption" }, //Risk questions
      { label: "Recovering from a technology disruption could be expensive", value: "recovery" },
      { label: "The organization has a pre-budgeted disaster recovery plan in place to recover from a technology disruption", value: "no recovery" },
      { label: "There is no business continuity plan in place to ensure that critical business functions can continue in the event of a disruption", value: "continuity" },
      { label: "A technology disruption typically leads to a significant loss in customers,", value: "loss"},
      { label: "There is NO documented risk management framework in place to identify and mitigate risks associated with the bank's business activities", value: "framework"},

      { label: "System outages have a significant impact on daily operations", value: "system" }, //Risk questions
      { label: "A data breach could disrupt daily operations", value: "operations" },
      { label: "Third-party vendors are critical to the organization's daily IT operations", value: "vendors" },
      { label: "The bank DOES NOT routinely tests its disaster recovery plan", value: "tests" },
      { label: "Operational risks are NOT frequently identified and reported within your organization", value: "risks" },
      { label: "Operational IT issues typically result from issues with vendors and third-party service providers", value: "third-party" },

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
  
        <title>All Risks</title>
  

        <body className={mon.className}>
          <div>
            <h1>All Categories</h1>
          </div>
          <div>
          <Checkbox questions={checkboxQuestions}/>
          </div>
  
          </body>
      </>
    );
    }
export default Total;