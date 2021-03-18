/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ilkkap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <h1 className="my-4">Front page</h1>
        <ul>
          <li>
            <Link href="/reviews" passHref>
              <a className="text-blue-500 hover:text-blue-700">Reviews</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
