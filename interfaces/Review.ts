import ContentfulFile from './ContentfulFile';

export default interface Review {
  heading: string;
  featured: boolean;
  summary: string;
  slug: string;
  score: number;
  publishedAt: string;
  spotifyLink: string;
  heroImage: ContentfulFile
};
