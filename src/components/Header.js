import Logo from "../assets/tmdb-logo.svg";

const Header = () => {
  return (
    <div className="w-full bg-slate-500 flex p-5 justify-between items-center">
      <img src={Logo} alt="tmdb" className="lg:max-h-8 max-h-4" />
    </div>
  );
};

export default Header;
