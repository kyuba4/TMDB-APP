import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles.h1}>404.</h1>
        <h3 className={styles.h3}>OOOOOOOOPs!</h3>
        <Button to="/" styles={styles.backButton} text="Go to homepage" onClick={() => navigate("/")} />
      </div>
    </>
  );
};

const styles = {
  wrap: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col",
  h1: "text-9xl font-bold text-center text-red-700 my-3",
  h3: "text-xl font-bold text-center my-3",
  backButton:
    "text-sm text-center p-4 mx-auto mt-5 bg-zinc-700 text-white rounded-full shadow-md shadow-zinc-500/50 hover:opacity-80 duration-300",
};

export default NotFound;
