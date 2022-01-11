const LoadMoreButton = ({ handleLoadMore, text, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleLoadMore}
      className="flex justify-center mx-auto mt-8 bg-zinc-900 text-white px-4 py-3 rounded-full disabled:opacity-50 disabled:cursor-wait cursor-pointer duration-200 hover:opacity-80"
    >
      {text}
    </button>
  );
};

export default LoadMoreButton;
