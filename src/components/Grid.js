const Grid = ({ children, header }) => {
  return (
    <>
      <h1 className="mt-7 text-center text-xl md:text-3xl font-semibold">{header}</h1>
      <div className="container mt-7 mx-auto px-4 grid grid-cols-responsive-grid gap-6 justify-items-center">{children}</div>
    </>
  );
};

export default Grid;
