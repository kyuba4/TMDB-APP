import { useEffect, useState } from "react";

const useFetchMovies = () => {
  const API_CALL = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setPending(true);

      const response = await fetch(API_CALL);
      const data = await response.json();
      setData(data);

      setPending(false);
    };

    getMovies();
  }, [API_CALL]);

  return { data, pending };
};

export default useFetchMovies;
