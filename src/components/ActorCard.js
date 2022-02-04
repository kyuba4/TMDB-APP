import NoImage from "../assets/no_image.jpg";

const ActorCard = ({ data }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/";
  const SMALL = "/w780";

  return (
    <div key={data.id} className={styles.card}>
      <img className={styles.img} src={data.profile_path ? BASE_URL + SMALL + data.profile_path : NoImage} alt="Actor's Face" />
      <div className={styles.desc}>
        <p className={styles.p1}>{data.name}</p>
        <p className={styles.p2}>As: {data.character}</p>
      </div>
    </div>
  );
};

const styles = {
  card: "bg-gradient-to-b from-slate-700 to-slate-500 text-white text-center rounded-md p-2 shadow-md shadow-slate-500 entry-anim",
  img: "rounded-md",
  desc: "mt-2 py-3",
  p1: "font-bold",
  p2: "text-sm",
};

export default ActorCard;
