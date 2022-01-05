import { useEffect, useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import useSearchMovies from "../hooks/useSearchMovies";
import FeaturedMovie from "../components/FeaturedMovie";
import Searchbar from "../components/Searchbar";
import OtherMovies from "../components/OtherMovies";
import LoadMoreButton from "../components/LoadMoreButton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [page, setPage] = useState({ currentPage: 1, maxFetchedPage: 0, totalPages: null });
  const { data, pending, error } = useFetchMovies(page.currentPage);
  const { title } = useSearchMovies("movie");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!data || page.currentPage === page.maxFetchedPage || page.currentPage === page.totalPages) return;

    const newArr = [...movies, ...data.results];
    setMovies(newArr);
    setPage({ ...page, maxFetchedPage: page.maxFetchedPage + 1, totalPages: data.total_pages });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {!movies.length > 0 && (
        <>
          <Skeleton height={512} />
          <div className="flex flex-wrap">
            <div className="mx-auto">
              <Skeleton count={7} height={350} width={250} inline={true} className="mx-2 my-4" />
            </div>
          </div>
        </>
      )}
      {error && <div className="text-red-700">{error}</div>}
      {movies.length > 0 && (
        <>
          <FeaturedMovie data={movies[0]} />
          <Searchbar />
          <OtherMovies data={movies.slice(1)} />
        </>
      )}
      <LoadMoreButton
        text={pending || !movies ? "Loading..." : "Load More"}
        handleLoadMore={() => setPage({ ...page, currentPage: page.currentPage + 1 })}
        disabled={!movies || pending}
      />
    </>
  );
};

export default Home;
