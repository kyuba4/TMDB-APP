import { useState } from "react";

const MovieCard = ({ data }) => {
  const { poster_path: poster, original_title, title } = data;

  const POSTER_IMG = poster ? `https://image.tmdb.org/t/p/original${poster}` : null;

  const [imgLoad, setImgLoad] = useState(false);

  return (
    <div
      className={`${
        imgLoad ? "" : "blur-sm"
      } flex flex-col items-center h-full max-w-xs duration-300 ease-in-out cursor-pointer hover:opacity-90`}
      title={title || original_title }
    >
      {poster && (
        <img
          className="rounded-md w-full h-full shadow-md shadow-gray-500"
          src={POSTER_IMG}
          alt="Poster"
          onLoad={() => setImgLoad(true)}
        />
      )}
    </div>
  );
};

export default MovieCard;
