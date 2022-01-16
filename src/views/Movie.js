import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchMovie from "../hooks/useFetchMovie";
import MoviesListSkeleton from "../components/MoviesListSkeleton";
import Grid from "../components/Grid";
import ActorCard from "../components/ActorCard";
import MovieDetails from "../components/MovieDetails";
import MovieTopBar from "../components/MovieTopBar";

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
      )}
    </>
  );
};

export default Movie;
