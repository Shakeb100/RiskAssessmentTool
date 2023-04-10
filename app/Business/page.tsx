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

function Business(){
  const checkboxQuestions = [
    { label: "Sensitive NLNB business data is at risk in the event of a technology disruption", value: "disruption" }, //Risk questions
    { label: "Recovering from a technology disruption could be expensive", value: "recovery" },
    { label: "The organization has a pre-budgeted disaster recovery plan in place to recover from a technology disruption", value: "no recovery" },
    { label: "There is no business continuity plan in place to ensure that critical business functions can continue in the event of a disruption", value: "continuity" },
    { label: "A technology disruption typically leads to a significant loss in customers,", value: "loss"},
    { label: "There is NO documented risk management framework in place to identify and mitigate risks associated with the bank's business activities", value: "framework"},

  ];


  return (
    <>
    

      <title>Business</title>
      
      <body  className={mon.className}>
        <div>
          <h1>Business</h1>
        </div>
        <div>
        <Checkbox questions={checkboxQuestions} />
        </div>
      </body>

    </>
  );
  }

export default Business;