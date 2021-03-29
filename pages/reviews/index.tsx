/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import { Entry } from 'contentful';

import ReviewHeader from '../../components/review-header';

import ContentfulService from '../../services/ContentfulService';

export const getStaticProps: GetStaticProps = async () => {
  const cs: ContentfulService = new ContentfulService();
  const allReviews: Promise<Entry<any>[]> = await cs.getAllReviews();
  return {
    props: { allReviews },
  };
};

export default function Home({ allReviews }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Ilkkap - Reviews</title>
      </Head>

      <h1 className="my-5">Reviews</h1>

      {allReviews.map((review) => (
        <div key="{review.sys.id}">
          <ReviewHeader review={review.fields} />
        </div>
      ))}
    </div>
  );
}
