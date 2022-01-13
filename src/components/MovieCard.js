import { useState } from "react";

const MovieCard = ({ data }) => {
  const { poster_path: poster, original_title, title } = data;

  // Take img from API if there isn't an image take a placehoder
  const POSTER_IMG = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : `https://plchldr.co/i/500x500?bg=000000&fc=3cff00&text=${original_title || title}`;

  const [imgLoad, setImgLoad] = useState(false);

  return (
    <div
      className={`${
        imgLoad ? "entry-anim" : "opacity-0"
      } flex flex-col items-center group h-full max-w-xs duration-300 cubic-bezier(0.22, 1, 0.36, 1) cursor-pointer rounded-md overflow-hidden hover:opacity-90`}
      title={title || original_title}
    >
      <img
        className="object-cover w-full h-full shadow-md shadow-gray-500 duration-300 cubic-bezier(0.22, 1, 0.36, 1) group-hover:scale-105"
        src={POSTER_IMG}
        alt="Poster"
        onLoad={() => setImgLoad(true)}
      />
    </div>
  );
};

export default MovieCard;
