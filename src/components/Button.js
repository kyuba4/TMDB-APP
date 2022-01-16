const LoadMoreButton = ({ onClick, text, disabled, styles }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={styles}>
      {text}
    </button>
  );
};

export default LoadMoreButton;
