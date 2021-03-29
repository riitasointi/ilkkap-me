/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Entry } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import ReviewHeader from '../../components/review-header';

import ContentfulService from '../../services/ContentfulService';

export default function Review({ review }) {
  return (
    <div className="container mx-auto my-6">
      <Head>
        <title>{`Ilkkap - ${review.fields.heading}`}</title>
      </Head>

      <ReviewHeader review={review.fields} />

      <div className="mb-10">{documentToReactComponents(review.fields.content)}</div>

      <iframe title="spotify-embed" src={review.fields.spotifyLink} width="400" height="400" allow="encrypted-media"></iframe>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cs: ContentfulService = new ContentfulService();
  const review: Promise<Entry<any>> = await cs.getReviewBySlug(params.slug);
  return {
    props: { review },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const cs: ContentfulService = new ContentfulService();
  const allReviews: Promise<Entry<any>[]> = await cs.getAllReviews();
  return {
    paths: allReviews?.map((entry) => `/reviews/${entry.fields.slug}`) ?? [],
    fallback: false,
  };
};
