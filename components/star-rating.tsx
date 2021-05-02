type Params = {
  score: number;
};

export default function StarRating({ score }: Params) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex">
      {stars.map((star: number) => (
        <div key={star}>
          <span className={star <= score ? 'text-xl text-yellow-500' : 'text-xl text-gray-400'}>&#9733;</span>
        </div>
      ))}
    </div>
  );
}
