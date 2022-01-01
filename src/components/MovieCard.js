const MovieCard = ({ data }) => {
  const { poster_path: poster, original_title, name, release_date, vote_count, vote_average } = data;

  const POSTER_IMG = poster ? `https://image.tmdb.org/t/p/original${poster}` : null;

  return (
    <div className="flex flex-col items-center max-w-xs bg-gradient-to-b from-slate-600 to-slate-500 text-white rounded-xl py-3 px-5 shadow-md shadow-slate-500 duration-300 ease-in-out cursor-pointer hover:opacity-90 ">
      {poster && <img className="w-9/12 rounded-lg" src={POSTER_IMG} alt="Poster" onLoad={console.log("img loaded")} />}
      <div className="flex flex-col w-full pt-4 text-sm overflow-hidden text-ellipsis">
        <div>Title: {original_title || name}</div>
        <div>Release: {release_date}</div>
        <div>Reviews: {vote_count} </div>
        <div>Average Vote: {vote_average}</div>
      </div>
    </div>
  );
};

export default MovieCard;
