import useHomeFetch from "../hooks/useHomeFetch";
import FeaturedMovie from "../components/FeaturedMovie";
import Searchbar from "../components/Searchbar";
import MoviesList from "../components/MoviesList";
import LoadMoreButton from "../components/LoadMoreButton";
import MoviesListSkeleton from "../components/MoviesListSkeleton";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore, showBigImage } = useHomeFetch();

  return (
    <>
      {(!state.results.length || loading) && <MoviesListSkeleton />}

      {error && <div className="text-red-500">{error}</div>}

      {state.results.length && showBigImage && !loading && <FeaturedMovie data={state.results[0]} />}

      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {(state.results.length || !loading) && (
        <MoviesList
          header={showBigImage ? "Other Featured Movies" : "Searched Movies"}
          data={!showBigImage ? state.results : state.results.slice(1)}
        />
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
