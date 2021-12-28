import { useEffect, useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import FeaturedMovie from "../components/FeaturedMovie";
import Searchbar from "../components/Searchbar";

const Home = () => {
  const { data, pending } = useFetchMovies();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  return (
    <>
      {pending && <div>Loading...</div>}
      {movies && <FeaturedMovie props={movies.results[0]} />}
      {movies && <Searchbar />}
    </>
  );
};

export default Home;
