import { useEffect, useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import FeaturedMovie from "../components/FeaturedMovie";
import Searchbar from "../components/Searchbar";
import OtherMovies from "../components/OtherMovies";
import LoadMoreButton from "../components/LoadMoreButton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, pending, error } = useFetchMovies(page);
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data) {
      // data.results.forEach((result) => movies.push(result));
      data.results.forEach((result) => movies.push(result));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {!movies.length > 0 && (
        <>
          <Skeleton height={512} />
          <div className="text-center">
            <Skeleton count={6} height={350} width={250} inline={true} className="mx-2 my-4" />
          </div>
        </>
      )}
      {error && <div className="text-red-700">{error}</div>}
      {movies.length > 0 && (
        <>
          <FeaturedMovie data={movies[0]} />
          <Searchbar />
          <OtherMovies data={movies} />
        </>
      )}
      {pending ? <div className="text-center">Loading...</div> : <LoadMoreButton loadMore={() => setPage(page + 1)} />}
    </>
  );
};

export default Home;
