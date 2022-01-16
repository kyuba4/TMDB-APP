import { Link } from "react-router-dom";

const MovieTopBar = ({ data }) => {
  return (
    <div className="bg-gradient-to-b from-slate-500 to-slate-400 p-5 flex items-center text-white">
      <div className="container mx-auto flex">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <div className="mx-3">|</div>
        <div>{data.title || data.original_title}</div>
      </div>
    </div>
  );
};

export default MovieTopBar;
