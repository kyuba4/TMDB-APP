import Logo from "../assets/tmdb-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="tmdb" className={styles.img} />
      </Link>
    </div>
  );
};

const styles = {
  header: "w-full bg-gradient-to-b from-slate-600 to-slate-500 flex p-5 justify-between items-center",
  img: "max-h-8 w-full",
};

export default Header;
