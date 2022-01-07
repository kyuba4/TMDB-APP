import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const OtherMovies = ({ data }) => {
  return (
    <>
      <h1 className="mt-7 text-center text-3xl font-semibold">Other featured movies</h1>
      <div className="mt-7 mx-3 grid grid-cols-responsive-grid gap-6 justify-items-center">
        {data.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} id={movie.id}>
            <MovieCard data={movie} key={movie.id} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default OtherMovies;
