import { useEffect, useState } from "react";

const useFetchMovie = (movieID) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movieOverview, setMovieOverview] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

  const sessionPersistence = JSON.parse(sessionStorage.getItem(movieID));

  useEffect(() => {
    if (sessionPersistence) {
      setMovieOverview(sessionPersistence[0]);
      setMovieCredits(sessionPersistence[1]);
      return;
    }

    const fetchMovie = async () => {
      // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`);
      const data = await response.json();

      setMovieOverview(data);
    };

    const fetchCredits = async () => {
      // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`);
      const data = await response.json();

      setMovieCredits(data);
    };

    fetchMovie();
    fetchCredits();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [API_KEY, movieID]);

  useEffect(() => {
    if (!sessionPersistence && movieOverview && movieCredits)
      sessionStorage.setItem(movieID, JSON.stringify([movieOverview, movieCredits]));
  }, [movieOverview, movieCredits, movieID, sessionPersistence]);

  return { movieOverview, movieCredits };
};

export default useFetchMovie;
