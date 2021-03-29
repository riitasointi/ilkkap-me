/* eslint-disable react/no-array-index-key */

type Params = {
  score: number;
};

export default function StarRating({ score }: Params) {
  return (
    <div className="flex">
      {[...Array(5)].map((star: number, index: number) => (
        <div key={index}>
          <span className={index + 1 <= score ? 'text-xl text-yellow-500' : 'text-xl text-gray-400'}>&#9733;</span>
        </div>
      ))}
    </div>
  );
}
