import { useEffect, useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import FeaturedMovie from "../components/FeaturedMovie";

const Home = () => {
  const { data, pending } = useFetchMovies();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  return <>{movies && <FeaturedMovie props={movies.results[0]} />}</>;
};

export default Home;
