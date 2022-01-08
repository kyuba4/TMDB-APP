import { useState } from "react";

const MovieCard = ({ data }) => {
  const { poster_path: poster, original_title, title } = data;

  const POSTER_IMG = poster
    ? `https://image.tmdb.org/t/p/original${poster}`
    : `https://plchldr.co/i/500x500?bg=000000&fc=3cff00&text=${original_title || title}`;

  const [imgLoad, setImgLoad] = useState(false);

  return (
    <div
      className={`${
        imgLoad ? "" : "blur-sm"
      } flex flex-col items-center h-full max-w-xs duration-300 ease-in-out cursor-pointer hover:opacity-90`}
      title={title || original_title}
    >
      <img
        className="rounded-md object-cover w-full h-full shadow-md shadow-gray-500"
        src={POSTER_IMG}
        alt="Poster"
        onLoad={() => setImgLoad(true)}
      />
    </div>
  );
};

export default MovieCard;
