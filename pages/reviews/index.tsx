/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Entry } from 'contentful';
import ContentfulService from '../../services/ContentfulService';

export const getStaticProps: GetStaticProps = async () => {
  const cs: ContentfulService = new ContentfulService();
  const featuredReviews: Promise<Entry<any>[]> = await cs.getFeaturedReviews();
  return {
    props: { featuredReviews },
  };
};

export default function Home({ featuredReviews }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Ilkkap - Reviews</title>
      </Head>

      <h1 className="my-5">Reviews</h1>

      <ul>
        {featuredReviews.map((entry) => (
          <li key="{entry.sys.id}">
            <Link href={`/reviews/${entry.fields.slug}`} passHref>
              <a className="text-blue-500 hover:text-blue-700">
                {entry.fields.heading}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
