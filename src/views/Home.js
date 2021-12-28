import { useEffect, useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import FeaturedMovie from "../components/FeaturedMovie";
import Searchbar from "../components/Searchbar";
import OtherMovies from "../components/OtherMovies";

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
      {movies && (
        <>
          <FeaturedMovie data={movies.results[0]} />
          <Searchbar />
          <OtherMovies data={movies} />
        </>
      )}
    </>
  );
};

export default Home;
