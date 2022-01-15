import { useEffect, useState } from "react";
import Arrow from "../assets/arrow-up.svg";

const ScrollToTop = () => {
  const [userScroll, setUserScroll] = useState(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scroll = () => {
    setUserScroll(window.scrollY);
  };

  useEffect(() => {
    setUserScroll(window.scrollY);
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      {userScroll && (
        <button
          onClick={scrollToTop}
          className={`fixed right-6 bottom-10 text-white bg-zinc-800 rounded-full p-4 duration-300 hover:opacity-90 ${
            userScroll < 1500 ? "translate-y-28" : "translate-y-0"
          }`}
        >
          <img src={Arrow} alt="Up" className="w-4 h-4" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
