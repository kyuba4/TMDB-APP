import { useNavigate } from "react-router-dom";

const MovieTopBar = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-slate-500 to-slate-400 p-5 flex items-center text-white text-sm lg:text-base">
      <div className="flex">
        <button className="hover:underline" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <div className="mx-3">|</div>
        <div>{data.title || data.original_title}</div>
      </div>
    </div>
  );
};

export default MovieTopBar;
