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
        className={styles.backdropImg}
      >
        <div className={styles.wrap}>
          {data.poster_path && (
            <div className={styles.poster}>
              <img className={styles.posterImg} src={BASE_URL + SMALL + data.poster_path} alt="poster" />
            </div>
          )}
          <div className={styles.descWrap}>
            <div className={styles.title}>{data.title || data.original_title}</div>
            <div className={styles.plot}>PLOT</div>
            <div className={styles.overview}>{data.overview}</div>
            <div className={styles.ratingWrap}>
              <div className={styles.ratingText}>Rating:</div>
              <div className={styles.averageVote}>{data.vote_average}</div>
            </div>
            <div className={styles.genres}>
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
      <div className={styles.moreInfoWrap}>
        <div className="my-1">Running Time: {timeConverter(data.runtime) || "unknown"}</div>
        <div className="my-1">Budget: {moneyConverter(data.budget) || "unknown"}</div>
        <div className="my-1">Revenue: {moneyConverter(data.revenue) || "unknown"}</div>
      </div>
    </>
  );
};

const styles = {
  backdropImg: "flex w-full shadow-md h-full shadow-gray-500 bg-center bg-no-repeat bg-cover p-8 justify-center entry-anim",
  wrap: "flex flex-col md:flex-row max-w-5xl bg-black bg-opacity-70 rounded-xl",
  poster: "flex justify-center md:w-5/12",
  posterImg: "h-full w-full object-cover rounded-md",
  descWrap: "w-full h-full text-white flex flex-col py-4 px-5",
  title: "text-3xl mb-4 font-semibold",
  plot: "font-bold mb-3",
  overview: "w-11/12 text-sm",
  ratingWrap: "my-5 flex content-center",
  ratingText: "flex content-center items-center",
  averageVote: "bg-white text-black rounded-full flex items-center justify-center brightness-90 ml-4 w-10 h-10",
  genres: "mt-auto flex text-sm",
  moreInfoWrap:
    "bg-gradient-to-b from-slate-600 to-slate-400 w-full h-fit p-4 flex flex-col justify-around items-center text-white text-sm shadow-md shadow-slate-500 entry-anim sm:flex-row",
};

export default MovieDetails;
