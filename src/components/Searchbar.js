const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center justify-center bg-slate-500 w-full h-20 shadow-md shadow-slate-500/70">
      <input
        type="text"
        className="h-1/2 w-full max-w-5xl pl-5 mx-7 rounded-lg bg-slate-300 text-black border-0 outline-0 duration-300 ease focus:brightness-95"
        placeholder="Search for a movie"
        maxLength="65"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    </div>
  );
};

export default Searchbar;
