import MovieCard from "./MovieCard";

const OtherMovies = ({ data }) => {
  return (
    <>
      <h1 className="mt-7 text-center text-3xl font-semibold">Other featured movies</h1>
      <div className="mt-7 mx-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {data.results.slice(1).map((movie) => (
          <MovieCard data={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default OtherMovies;