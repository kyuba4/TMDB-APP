const MovieCard = ({ data }) => {
  const POSTER_IMG = `https://image.tmdb.org/t/p/original${data.poster_path}`;

  return (
    <div className="flex flex-col items-center max-w-xs bg-slate-500 text-white rounded-xl py-3 px-5 shadow-md shadow-slate-500 duration-300 ease-in-out cursor-pointer hover:-translate-y-1 ">
      <img className="w-9/12 rounded-lg" src={POSTER_IMG} alt="Poster" />
      <div className="flex flex-col w-full pt-4 text-sm overflow-hidden text-ellipsis">
        <div>Title: {data.original_title || data.name}</div>
        <div>Release: {data.release_date}</div>
        <div>Reviews: {data.vote_count} </div>
        <div>Average Vote: {data.vote_average}</div>
      </div>
    </div>
  );
};

export default MovieCard;
