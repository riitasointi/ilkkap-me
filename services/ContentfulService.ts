import { createClient, Entry, ContentfulClientApi } from 'contentful';

export default class ContentfulService {
  private client: ContentfulClientApi = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_TOKEN,
  });

  private lang: string = 'fi';

  async getAllReviews(): Promise<Entry<any>[]> {
    return this.client.getEntries({ 
      content_type: 'review',
      locale: this.lang,
    })
      .then((res) => res.items);
  }

  async getFeaturedReviews(): Promise<Entry<any>[]> {
    return this.client.getEntries({
      content_type: 'review',
      'fields.featured': true,
      locale: this.lang,
    })
      .then((res) => res.items);
  }

  async getReviewBySlug(slug: string): Promise<Entry<any>> {
    return this.client.getEntries({
      content_type: 'review',
      'fields.slug': slug,
      locale: this.lang,
      limit: 1,
    })
      .then((res) => res.items[0]);
  }
}
