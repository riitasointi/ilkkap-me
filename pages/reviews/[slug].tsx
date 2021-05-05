import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

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

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const cs: ContentfulService = new ContentfulService();
  const review = await cs.getReviewBySlug(params.slug);
  return {
    props: { review },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const cs: ContentfulService = new ContentfulService();
  const allReviews = await cs.getAllReviews();
  return {
    paths: allReviews?.map((entry) => `/reviews/${entry.fields.slug}`) ?? [],
    fallback: false,
  };
};
