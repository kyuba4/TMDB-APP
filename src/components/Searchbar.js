const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.wrap}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search for a movie"
        maxLength="65"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    </div>
  );
};

const styles = {
  wrap: "flex items-center justify-center bg-slate-500 w-full h-20 shadow-md shadow-slate-500/40",
  input:
    "h-1/2 w-full max-w-5xl pl-5 mx-7 rounded-lg bg-slate-300 text-black border-0 outline-0 duration-300 ease focus:brightness-95",
};

export default Searchbar;
