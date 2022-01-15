import { useEffect, useState } from "react";

const useFetchMovies = () => {
  const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showBigImage, setShowBigImage] = useState(true);
  const [emptyResults, setEmptyResults] = useState(false);

  const fetchMovies = async (page, searchTerm) => {
    const API_CALL = searchTerm
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}&language=en-US`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&language=en-US`;

    try {
      setError(false);
      setLoading(true);

      const response = await fetch(API_CALL);
      const movies = await response.json();

      // Add fetched images to state
      setState((prev) => ({
        ...movies,
        results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));

      if (!movies.total_pages) {
        setEmptyResults(true);
      } else {
        setEmptyResults(false);
      }

      // Show featured big image only when user didn't type anything in search field
      if (searchTerm) {
        setShowBigImage(false);
      } else {
        setShowBigImage(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // search and initial
  useEffect(() => {
    const sessionPersistence = JSON.parse(sessionStorage.getItem("home"));

    const timeoutID = setTimeout(
      () => {
        if (!searchTerm) {
          if (sessionPersistence) {
            setState(sessionPersistence);
            return;
          }
        }

        setState(initialState);
        fetchMovies(1, searchTerm);
      },
      state.results.length ? 800 : 0
    );
    return () => clearTimeout(timeoutID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingMore, searchTerm, state.page]);

  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("home", JSON.stringify(state));
  }, [state, searchTerm]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore, showBigImage, emptyResults };
};

export default useFetchMovies;
