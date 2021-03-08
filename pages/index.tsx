/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [clickAmount, setClickAmount] = useState(0);
  const increment = () => setClickAmount((amount) => amount + 1);

  return (
    <div>
      <Head>
        <title>Ilkkap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hi mom</h1>
        <ul>
          <li>
            <Link href="/reviews" passHref>
              <a>Home</a>
            </Link>
          </li>
        </ul>
        <p>
          You clicked the button
          <strong> {clickAmount} </strong>
          times.
        </p>
        <button type="button" onClick={increment}>
          Clicketi click
        </button>
      </main>
    </div>
  );
}
