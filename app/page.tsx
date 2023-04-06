import React from 'react';
import Link from 'next/link';
import Financial from './Financial/page';

function HomePage() {
  return (
    <>


      <title>Risk Assessment Tool</title>

        <div>
          <h1>Risk Assessment Tool</h1>
        </div>

        <div>
          <h2>Helping you identify and manage potential risks </h2>
        </div>


      <div>

        <Link href="/Financial">
        <button>Financial</button> 
        </Link>

        <Link href= "/Operational">
        <button>Operational</button> 
        </Link>

        <Link href= "/Technical">
        <button>Technical</button>
        </Link>


      </div>

    </>
  );
}

export default HomePage;
