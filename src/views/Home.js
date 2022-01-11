import useHomeFetch from "../hooks/useHomeFetch";
import FeaturedMovie from "../components/FeaturedMovie";
import Searchbar from "../components/Searchbar";
import MoviesList from "../components/MoviesList";
import LoadMoreButton from "../components/LoadMoreButton";
import MoviesListSkeleton from "../components/MoviesListSkeleton";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore, showBigImage, emptyResults } = useHomeFetch();

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
      {(state.results.length || !loading) && !emptyResults && (
        <MoviesList
          header={showBigImage ? "Other Featured Movies" : "Searched Movies"}
          data={showBigImage ? state.results.slice(1) : state.results}
        />
      )}

      {/* BUTTON FOR LOADING MORE MOVIES */}
      {!emptyResults && state.total_pages > state.page && (
        <LoadMoreButton
          text={loading ? "Loading..." : "Load More"}
          handleLoadMore={() => setIsLoadingMore(true)}
          disabled={loading}
        />
      )}
    </>
  );
};

export default Home;
