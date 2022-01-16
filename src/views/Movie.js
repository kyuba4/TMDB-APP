import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchMovie from "../hooks/useFetchMovie";
import MoviesListSkeleton from "../components/MoviesListSkeleton";
import Grid from "../components/Grid";
import ActorCard from "../components/ActorCard";
import MovieDetails from "../components/MovieDetails";

const Movie = () => {
  const { movieID } = useParams();
  const { movieOverview, movieCredits } = useFetchMovie(movieID);
  const [state, setState] = useState(null);

  useEffect(() => {
    if (!movieOverview || !movieCredits) return;

    setState({ overview: movieOverview, credits: movieCredits });
  }, [movieOverview, movieCredits]);

  return (
    <>
      {!state && <MoviesListSkeleton />}
      {state && (
        <>
          <div className="bg-gradient-to-b from-slate-500 to-slate-400 p-5 flex items-center text-white">
            <div className="container mx-auto flex">
              <Link className="hover:underline" to="/">
                Home
              </Link>
              <div className="mx-3">|</div>
              <div>{state.overview.title || state.overview.original_title}</div>
            </div>
          </div>

          <MovieDetails data={state.overview} />

          {/* ACTORS LIST */}
          <Grid header="Actors">
            {state.credits.cast.map((actor) => (
              <ActorCard data={actor} key={actor.id} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default Movie;
