import { Link } from "react-router-dom";

const FeaturedMovie = ({ data }) => {
  const BACKDROP_IMG = data.backdrop_path
    ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
    : `https://plchldr.co/i/600x500?bg=000000&fc=3cff00&text=${data.original_title || data.title}`;

  return (
    <div className={styles.card}>
      <Link to={`/movie/${data.id}`} className={styles.link}>
        <img src={BACKDROP_IMG} alt="Featured" draggable="false" className={styles.img} />
        <div className={styles.textWrap}>
          <div className="flex">
            <div className={styles.textBox}>
              <span>{data.original_title}</span>
            </div>
            <div className={styles.average}>{data.vote_average}</div>
          </div>
          <div className={styles.overview}>{data.overview}</div>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  card: "flex max-h-128 w-full relative entry-anim",
  link: "w-full max-h-128",
  img: "object-cover w-full max-h-128 brightness-75",
  textWrap: "text-white flex flex-col max-w-4xl absolute ml-5 bottom-5 lg:bottom-20 lg:ml-20",
  textBox: "flex items-center md:text-3xl",
  average: "bg-black/70 text-white text-sm p-2 ml-2 rounded-full",
  overview: "max-w-3xl text-sm hidden mt-3 md:block",
};

export default FeaturedMovie;
