import useHomeFetch from "../hooks/useHomeFetch";
import FeaturedMovie from "../components/FeaturedMovie";
import Searchbar from "../components/Searchbar";
import Grid from "../components/Grid";
import Button from "../components/Button";
import MoviesListSkeleton from "../components/MoviesListSkeleton";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore, showBigImage, emptyResults } = useHomeFetch();
  const [gridData, setGridData] = useState(state.results);

  useEffect(() => {
    if (showBigImage) {
      setGridData(state.results.slice(1));
    } else {
      setGridData(state.results);
    }
  }, [showBigImage, state]);

  return (
    <>
      {/* LOADING SKELETON */}
      {!state.results.length && loading && <MoviesListSkeleton />}

      {/* ERROR MESSAGE */}
      {error && <div className="text-red-500">{error}</div>}

      {/* BIG FEATURED MOVIE IMAGE */}
      {state.results[0] && showBigImage && !loading && <FeaturedMovie data={state.results[0]} />}

      {/* SEARCHBAR */}
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* MESSAGE IF THERE AREN'T ANY RESULTS */}
      {emptyResults && <h1 className="font-semibold text-center text-2xl mt-8">We don't know this movie yet</h1>}

      {/* LIST OF MOVIES */}
      {(state.results.length > 0 || !loading) && !emptyResults && (
        <Grid
          header={showBigImage ? "Other Featured Movies" : "Searched Movies"}
          children={gridData.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard data={movie} />
            </Link>
          ))}
        />
      )}

      {/* BUTTON FOR LOADING MORE MOVIES */}
      {!emptyResults && state.total_pages > state.page && (
        <Button
          text={loading ? "Loading..." : "Load More"}
          onClick={() => setIsLoadingMore(true)}
          disabled={loading}
          styles="flex justify-center mx-auto mt-8 bg-zinc-800 text-white px-4 py-3 rounded-full disabled:opacity-50 disabled:cursor-wait cursor-pointer duration-200 hover:opacity-80"
        />
      )}
    </>
  );
};

export default Home;
