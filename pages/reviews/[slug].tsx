/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Entry } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ContentfulService from '../../services/ContentfulService';

export default function Review({ review }) {
  console.log(review);
  return (
    <div className="container mx-auto my-6">
      <Head>
        <title>{`Ilkkap - ${review.fields.heading}`}</title>
      </Head>

      <h1 className="my-5">{review.fields.heading}</h1>

      <div className="flex">
        {[...Array(5)].map((star: any, index: number) => (
          <div key={index}>
            <span
              className={
                index + 1 <= review.fields.score ? 'text-yellow-500' : 'text-gray-400'
              }
            >
              &#9733;
            </span>
          </div>
        ))}
      </div>

      <div className="my-5 flex justify-between">
        <img className="w-36" src={review.fields.heroImage.fields.file.url} alt="album-cover"/>
        <div>124</div>
      </div>

      <div>{documentToReactComponents(review.fields.content)}</div>
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
