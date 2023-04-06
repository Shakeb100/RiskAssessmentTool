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
          <h2>Helping you make the right move. </h2>
        </div>


      <div>

        <div>
          <h3>Which Risk are you concerned about?</h3>
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

      </div>

    </>
  );
}

export default HomePage;
