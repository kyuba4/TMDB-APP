import { useState } from "react";
import useHomeFetch from "../hooks/useHomeFetch";
import FeaturedMovie from "../components/FeaturedMovie";
import Searchbar from "../components/Searchbar";
import MoviesList from "../components/MoviesList";
import LoadMoreButton from "../components/LoadMoreButton";
import MoviesListSkeleton from "../components/MoviesListSkeleton";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

  return (
    <>
      {state.results.length > 0 && <MoviesListSkeleton />}
      {error && <div className="text-red-500">{error}</div>}
      {state.results.length > 0 && (
        <>
          <FeaturedMovie data={state.results[0]} />
          <Searchbar setSearchTerm={setSearchTerm} />
          <MoviesList data={state.results.slice(1)} />
        </>
      )}
      <LoadMoreButton
        text={loading || !state.results.length ? "Loading..." : "Load More"}
        handleLoadMore={() => setIsLoadingMore(true)}
        disabled={!state.results.length || loading}
      />
    </>
  );
};

export default Home;
