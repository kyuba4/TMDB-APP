const Grid = ({ children, header }) => {
  return (
    <>
      <h1 className={styles.header}>{header}</h1>
      <div className={styles.grid}>{children}</div>
    </>
  );
};

const styles = {
  header: "mt-7 text-center text-xl md:text-3xl font-semibold",
  grid: "container mt-7 mx-auto px-4 grid grid-cols-responsive-grid gap-6 justify-items-center",
};

export default Grid;
