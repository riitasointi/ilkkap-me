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
        <div className="flex md:items-center flex-col md:flex-row md:mt-32">
          <div className="md:w-1/5 mb-8 md:mb-0">
            <img className="rounded-full w-100 h-28 md:h-auto" src="/ilkka.jpeg" alt="" />
          </div>
          <div className="md:w-4/5 md:px-12">
            <h1 className="mb-5">
              <b>Hi! 👋 My name is Ilkka.</b>
            </h1>
            <p>I'm a Finnish full-stack software developer and a music afficionado.</p>
            <p>On this website you can find more information about me and reviews/articles I've written over the years.</p>
            <p>Please note that this website is still <b>very much</b> a work in progress 😊</p>
          </div>
        </div>
      </div>
    </div>
  );
}
