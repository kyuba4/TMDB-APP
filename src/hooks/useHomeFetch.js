import { useEffect, useState } from "react";

const useFetchMovies = () => {
  const initialState = {
    page: 0,
    results: [],
    totalPages: 0,
  };

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm) => {
    const API_CALL = searchTerm
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;

    try {
      setError(false);
      setLoading(true);

      const response = await fetch(API_CALL);
      const movies = await response.json();

      setState((prev) => ({
        ...movies,
        results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  // search and initial
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setState(initialState);
      fetchMovies(1, searchTerm);
    }, 800);
    return () => clearTimeout(timeoutID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingMore, searchTerm, state.page]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};

export default useFetchMovies;
