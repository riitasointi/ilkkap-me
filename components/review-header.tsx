import moment from 'moment';
import StarRating from './star-rating';
import Blockquote from './blockquote';

export default function ReviewHeader({ review }) {
  moment.locale('fi');

  return (
    <div>
      <h1 className="mt-5">{review.heading}</h1>
      <span className="italic text-xs">{moment(review.publishedAt).format('MMMM Do YYYY')}</span>

      <div className="my-5 flex flex-col md:flex-row justify-start gap-6">
        <img className="w-36 rounded-xl" src={review.heroImage.fields.file.url} alt="album-cover" />
        <div className="flex flex-col gap-4">
          <StarRating score={review.score} />
          <Blockquote text={review.summary} />
        </div>
      </div>
    </div>
  );
}
