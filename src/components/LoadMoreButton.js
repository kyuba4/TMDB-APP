const LoadMoreButton = ({ loadMore }) => {
  return (
    <button
      onClick={loadMore}
      className="flex justify-center mx-auto my-8 bg-zinc-900 text-white px-4 py-3 rounded-full cursor-pointer duration-200 hover:opacity-80"
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;
