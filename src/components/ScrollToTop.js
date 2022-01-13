import Arrow from "../assets/arrow-up.svg";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-6 bottom-10 text-white bg-zinc-800 rounded-full p-4 duration-300 hover:opacity-90"
    >
      <img src={Arrow} alt="Up" className="w-4 h-4" />
    </button>
  );
};

export default ScrollToTop;
