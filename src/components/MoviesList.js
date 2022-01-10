import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MoviesList = ({ data, header }) => {
  return (
    <>
      <h1 className="mt-7 text-center text-xl md:text-3xl font-semibold">{header}</h1>
      <div className="container mt-7 mx-auto grid grid-cols-responsive-grid gap-6 justify-items-center">
        {data.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard data={movie} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default MoviesList;
