const MovieCard = ({ data }) => {
  const { poster_path: poster, original_title, original_name } = data;

  const POSTER_IMG = poster ? `https://image.tmdb.org/t/p/original${poster}` : null;

  return (
    <div
      className="flex flex-col items-center h-full max-w-xs duration-300 ease-in-out cursor-pointer hover:opacity-90"
      title={original_title || original_name}
    >
      {poster && <img className="rounded-md w-full h-full shadow-md shadow-gray-500" src={POSTER_IMG} alt="Poster" />}
    </div>
  );
};

export default MovieCard;
