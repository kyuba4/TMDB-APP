import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchMovie from "../hooks/useFetchMovie";
import MoviesListSkeleton from "../components/MoviesListSkeleton";
import Grid from "../components/Grid";
import ActorCard from "../components/ActorCard";
import MovieDetails from "../components/MovieDetails";
import MovieTopBar from "../components/MovieTopBar";
import NotFound from "../views/NotFound";

const Movie = () => {
  const { movieID } = useParams();
  const { movieOverview, movieCredits } = useFetchMovie(movieID);
  const [state, setState] = useState(null);

  useEffect(() => {
    if (!movieOverview || !movieCredits) return;

    setState({ overview: movieOverview, credits: movieCredits });
  }, [movieOverview, movieCredits]);

  useEffect(() => {
    if (!state) return;

    document.title = state.overview.title || state.overview.original_title;
  }, [state]);

  return (
    <>
      {state === null ? (
        <MoviesListSkeleton />
      ) : state?.overview.id ? (
        <>
          {/* Top Bar with Home Page link and movie title */}
          <MovieTopBar data={state.overview} />

          {/* Movie Details */}
          <MovieDetails data={state.overview} />

          {/* ACTORS LIST */}
          <Grid header="Actors">
            {state.credits.cast.map((actor) => (
              <ActorCard data={actor} key={actor.id} />
            ))}
          </Grid>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Movie;
