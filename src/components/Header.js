import Logo from "../assets/tmdb-logo.svg";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-600 to-slate-500 flex p-5 justify-between items-center">
      <img src={Logo} alt="tmdb" className="lg:max-h-8 max-h-4" />
    </div>
  );
};

export default Header;
