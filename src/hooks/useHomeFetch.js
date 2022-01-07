import { useEffect, useState } from "react";

const useFetchMovies = (page) => {
  const API_CALL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;

  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      setPending(true);
      try {
        const response = await fetch(API_CALL);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
      setPending(false);
    };
    getMovies();
  }, [API_CALL]);

  return { data, pending, error };
};

export default useFetchMovies;
