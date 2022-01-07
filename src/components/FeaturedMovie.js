const FeaturedMovie = ({ data }) => {
  const BACKDROP_IMG = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;

  return (
    <div className="flex max-h-128 w-full relative">
      <img src={BACKDROP_IMG} alt="Featured" draggable="false" className="object-cover w-full brightness-75" />
      <div className="text-white flex flex-col max-w-4xl absolute ml-5 bottom-5 lg:bottom-20 lg:ml-20">
        <div className="flex">
          <div className="flex items-center md:text-3xl">
            <span>{data.original_title}</span>
          </div>
          <div className="bg-black/70 text-white text-sm p-2 ml-2 rounded-full">{data.vote_average}</div>
        </div>
        <div className="max-w-3xl text-sm hidden mt-3 md:block ">{data.overview}</div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
