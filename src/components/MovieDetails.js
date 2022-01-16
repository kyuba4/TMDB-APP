const MovieDetails = ({ data }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/";
  const SMALL = "/w780";
  const BIG = "/w1280";

  const timeConverter = (time) => {
    const h = Math.floor(time / 60);
    const m = time % 60;

    return `${h}h ${m}m`;
  };

  const moneyConverter = (money) => {
    if (!money) return null;
    return `$${money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BASE_URL + BIG + data.backdrop_path})`,
        }}
        className="flex w-full shadow-md h-full shadow-gray-500 bg-center bg-no-repeat bg-cover p-8 justify-center entry-anim"
      >
        <div className="flex flex-col md:flex-row max-w-5xl bg-black bg-opacity-70 rounded-xl">
          {data.poster_path && (
            <div className="flex justify-center md:w-5/12">
              <img className="h-full w-full object-cover rounded-md" src={BASE_URL + SMALL + data.poster_path} alt="poster" />
            </div>
          )}
          <div className="w-full h-full text-white flex flex-col py-4 px-5">
            <div className="text-3xl mb-4 font-semibold">{data.title || data.original_title}</div>
            <div className="font-bold mb-3">PLOT</div>
            <div className="w-11/12 text-sm">{data.overview}</div>
            <div className="my-5 flex content-center">
              <div className="flex content-center items-center">Rating:</div>
              <div className="bg-white text-black rounded-full flex items-center justify-center brightness-90 ml-4 w-10 h-10">
                {data.vote_average}
              </div>
            </div>
            <div className="mt-auto flex text-sm">
              <p>Genres:</p>
              {data.genres.map((genre, index) => (
                <p key={genre.id} className="ml-1">
                  {genre.name}
                  {/* Semicols after each genre */}
                  {index < data.genres.length - 1 ? "," : ""}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-slate-600 to-slate-400 w-full h-fit p-4 flex flex-col justify-around items-center text-white text-sm shadow-md shadow-slate-500 entry-anim sm:flex-row">
        <div className="my-1">Running Time: {timeConverter(data.runtime) || "unknown"}</div>
        <div className="my-1">Budget: {moneyConverter(data.budget) || "unknown"}</div>
        <div className="my-1">Revenue: {moneyConverter(data.revenue) || "unknown"}</div>
      </div>
    </>
  );
};

export default MovieDetails;
