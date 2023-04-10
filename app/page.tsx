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
          <h1>NLNB Risk Assessment</h1>
        </div>

      <div className='fade-in'>
        <div id="textdiv">
          <h2>Helping you make the right move. </h2>
        </div>
      </div>

<div className='flex'>
  <div className="fade-2">
    <div id ="homebdiv">
      <Link href="/Questions">
        <button className={`${mon.className} button`}>Get Started</button>
      </Link>
    </div>
  </div>
</div>

      

      </body>

    </>
  );
}

export default HomePage;
