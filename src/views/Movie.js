import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchMovie from "../hooks/useFetchMovie";
import MoviesListSkeleton from "../components/MoviesListSkeleton";
import NoImage from "../assets/no_image.jpg";

const Movie = () => {
  const { movieID } = useParams();
  const { movieOverview, movieCredits } = useFetchMovie(movieID);
  const [state, setState] = useState(null);
  const BASE_URL = "https://image.tmdb.org/t/p/";
  const SMALL = "/w780";
  const BIG = "/w1280";

  useEffect(() => {
    if (!movieOverview || !movieCredits) return;

    setState({ overview: movieOverview, credits: movieCredits });
  }, [movieOverview, movieCredits]);

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
      {!state && <MoviesListSkeleton />}
      {state && (
        <>
          <div className="bg-gradient-to-b from-slate-500 to-slate-400 h-11 flex items-center text-white">
            <div className="container mx-auto flex">
              <Link className="hover:underline" to="/">
                Home
              </Link>
              <div className="mx-3">|</div>
              <div>{state.overview.title || state.overview.original_title}</div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${BASE_URL + BIG + state.overview.backdrop_path})` }}
            className="flex w-full shadow-md shadow-gray-500 bg-center bg-no-repeat bg-cover p-8 justify-center entry-anim"
          >
            {/* MOVIE OVERVIEW */}
            <div className="flex flex-col md:flex-row max-w-5xl bg-black bg-opacity-70 rounded-xl">
              {/* POSTER IMG */}
              <div className="flex justify-center md:w-5/12">
                <img
                  className="h-full w-full object-cover rounded-md"
                  src={BASE_URL + SMALL + state.overview.poster_path}
                  alt="poster"
                />
              </div>
              {/* MORE INFO */}
              <div className="w-11/12 h-fit text-white flex flex-col m-5">
                <div className="text-3xl mb-4 font-semibold">{state.overview.title || state.overview.original_title}</div>
                <div className="font-bold mb-3">PLOT</div>
                <div className="w-11/12 text-sm">{state.overview.overview}</div>
                <div className="mt-5 flex content-center">
                  <div className="flex content-center items-center">Rating:</div>
                  <div className="bg-white text-black rounded-full flex items-center justify-center brightness-90 ml-4 w-10 h-10">
                    {state.overview.vote_average}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* MOVIE DETAILS */}
          <div className="bg-slate-500 w-full h-16 flex justify-around items-center text-white text-sm entry-anim">
            <div>Running Time: {timeConverter(state.overview.runtime) || "unknown"}</div>
            <div>Budget: {moneyConverter(state.overview.budget) || "unknown"}</div>
            <div>Revenue: {moneyConverter(state.overview.revenue) || "unknown"}</div>
          </div>
          {/* ACTORS */}
          <h1 className="font-semibold text-center text-3xl mt-7">Actors</h1>
          <div className="container mx-auto mt-7 grid grid-cols-responsive-grid gap-2">
            {state.credits.cast.map((actor) => (
              <div
                key={actor.id}
                className="bg-slate-600 text-white text-center rounded-md p-2 shadow-md shadow-slate-500 entry-anim"
              >
                <img
                  className="rounded-md"
                  src={actor.profile_path ? BASE_URL + SMALL + actor.profile_path : NoImage}
                  alt="Actor"
                />
                <div className="mt-2 py-3">
                  <p className="font-bold">{actor.name}</p>
                  <p className="text-sm">As: {actor.character}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Movie;
