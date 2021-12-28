import { useEffect } from "react";
import useFetchMovies from "../hooks/useFetchMovies";

const Home = () => {
  const { data, pending } = useFetchMovies();

  return <div>Home</div>;
};

export default Home;
