const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.wrap} style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
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
  wrap: "flex items-center justify-center w-full h-20 shadow-md shadow-zinc-500",
  input:
    "h-1/2 w-full max-w-5xl pl-5 mx-7 rounded-lg bg-slate-300 text-black border-0 outline-0 duration-300 ease focus:brightness-95",
};

export default Searchbar;
