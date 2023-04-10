import React from 'react';
import Link from 'next/link';
import './globals.css'
import { Montserrat} from 'next/font/google'


const mon = Montserrat({
  subsets: ['latin'],
  weight: '500'
})

function HomePage() {
  return (
    <>

      <title>Risk Assessment Tool</title>


    <body  className={mon.className}>
        <div>
          <h1>Risk Assessment Tool</h1>
        </div>

        <div id="textdiv">
          <h2 >Helping you make the right move. </h2>
        </div>


      <div>

        <div>
          <h3>Which Risk are you concerned about?</h3>
        </div>

        <div className={mon.className}>

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

        </div>
      </div>

      </body>

    </>
  );
}

export default HomePage;
