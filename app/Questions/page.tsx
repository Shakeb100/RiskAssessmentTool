
import React from 'react';
import Link from 'next/link';
import '../globals.css'
import { Montserrat} from 'next/font/google'


const mon = Montserrat({
  subsets: ['latin'],
  weight: '500'
})

function Questionpage() {
  return (
    <>

      <title>Risk Assessment Tool</title>


    <body  className={mon.className}>

        <div>

                <div>
                <h1>Which Risk are you concerned about?</h1>
                <h3>Identify the category of risk you want to assess</h3>
                </div>

                <div className={mon.className}>
            <div className='moreb fade-in'>
                <Link href="/Business">
                <button className={`${mon.className} button`}>Business</button>
                </Link>

                <Link href= "/Operational">
                <button className={`${mon.className} button`}>Operational</button> 
                </Link>

                <Link href= "/Technical">
                <button className={`${mon.className} button`}>Technical</button>
                </Link>

                <Link href= "/Security">
                <button className={`${mon.className} button`}>Security</button>
                </Link>


                <Link href= "/Total">
                <button className={`${mon.className} button`}>All Risks</button>
                </Link>

                </div>

                <div>
                    <h4 className='fade-2'>Our tool assesses the risk level by selecting questions related to different types of risks. If the selected answers are less than 25%, you will recieve a score of "low". If your score is up to 50%, the score is "Moderate". If your score is up to 75%, you will recieve a "High Risk" warning. If your cumulative score exceeds 75% you will enter the "Critical" category.</h4>
                </div>

             </div>
        </div>
        </body>

        </>
          );
        }

export default Questionpage;