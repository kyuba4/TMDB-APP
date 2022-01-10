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
      {/* LOADING SKELETON */}
      {!state.results.length && loading && <MoviesListSkeleton />}

      {/* ERROR MESSAGE */}
      {error && <div className="text-red-500">{error}</div>}

      {/* BIG FEATURED MOVIE IMAGE */}
      {state.results.length && showBigImage && !loading && <FeaturedMovie data={state.results[0]} />}

      {/* SEARCHBAR */}
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* LIST OF MOVIES */}
      {(state.results.length || !loading) && (
        <MoviesList
          header={showBigImage ? "Other Featured Movies" : "Searched Movies"}
          data={showBigImage ? state.results.slice(1) : state.results}
        />
      )}

      {/* BUTTON FOR LOADING MORE MOVIES */}
      <LoadMoreButton
        text={loading || !state.results.length ? "Loading..." : "Load More"}
        handleLoadMore={() => setIsLoadingMore(true)}
        disabled={!state.results.length || loading}
      />
    </>
  );
};

export default Home;
