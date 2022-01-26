import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <h1 className="text-9xl font-bold text-center text-red-700 my-3">404.</h1>
        <h3 className="text-xl font-bold text-center my-3">OOOOOOOOPs!</h3>
        <Button
          to="/"
          styles="text-sm text-center p-3 mx-auto mt-5 bg-slate-500 text-white rounded-full shadow-md shadow-slate-500"
          text="Go to homepage"
          onClick={goHome}
        />
      </div>
    </>
  );
};

export default NotFound;
