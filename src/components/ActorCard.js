import NoImage from "../assets/no_image.jpg";

const ActorCard = ({ data }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/";
  const SMALL = "/w780";

  return (
    <div
      key={data.id}
      className="bg-gradient-to-b from-slate-700 to-slate-500 text-white text-center rounded-md p-2 shadow-md shadow-slate-500 entry-anim"
    >
      <img className="rounded-md" src={data.profile_path ? BASE_URL + SMALL + data.profile_path : NoImage} alt="Actor's Face" />
      <div className="mt-2 py-3">
        <p className="font-bold">{data.name}</p>
        <p className="text-sm">As: {data.character}</p>
      </div>
    </div>
  );
};

export default ActorCard;
