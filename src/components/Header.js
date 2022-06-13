import Logo from "../assets/tmdb-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header} style={{ backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "saturate(180%) blur(20px)" }}>
      <Link to="/">
        <img src={Logo} alt="tmdb" className={styles.img} />
      </Link>
    </div>
  );
};

const styles = {
  header: "fixed top-0 left-0 w-full flex h-16 px-5 justify-between items-center z-50",
  img: "max-h-8 w-full",
};

export default Header;
