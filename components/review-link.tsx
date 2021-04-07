import Review from '../interfaces/Review';

type Params = {
  review: Review;
};

export default function ReviewLink({ review }: Params) {
  return (
    <div>
      <div className="my-5 flex flex-col md:flex-row justify-start gap-6">
        <img className="w-24 md:w-16 rounded-xl" src={review.heroImage.fields.file.url} alt="album-cover" />
        <a className="flex items-center" href={`/reviews/${review.slug}`}>
          {review.heading}
        </a>
      </div>
    </div>
  );
}
