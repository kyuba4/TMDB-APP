import { useParams } from "react-router-dom";

const Movie = () => {
  const { movieID } = useParams();

  return <div>This is a movie with {movieID} ID</div>;
};

export default Movie;
