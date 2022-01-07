import Logo from "../assets/tmdb-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-600 to-slate-500 flex p-5 justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="tmdb" className="max-h-8 w-full" />
      </Link>
    </div>
  );
};

export default Header;
