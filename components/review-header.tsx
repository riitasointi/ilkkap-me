import moment from 'moment';
import StarRating from './star-rating';
import Blockquote from './blockquote';

import Review from '../interfaces/Review';

type Params = {
  review: Review;
};

export default function ReviewHeader({ review }: Params) {
  moment.locale('en');

  return (
    <div>
      <h1>{review.heading}</h1>
      <span className="italic text-xs">{moment(review.publishedAt).format('MMMM Do YYYY')}</span>

      <div className="my-5 md:my-10 md:mt-8 flex flex-col md:flex-row justify-start gap-6">
        <img className="w-36 rounded-xl" src={review.heroImage.fields.file.url} alt="album-cover" />
        <div className="flex flex-col gap-4">
          <StarRating score={review.score} />
          <Blockquote text={review.summary} />
        </div>
      </div>
    </div>
  );
}
