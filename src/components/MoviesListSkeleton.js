import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MoviesListSkeleton = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className="w-full">
          <Skeleton height={500} width={"100%"} />
        </div>
        <div className={styles.wrap}>
          <div className="mx-2 my-2">
            <Skeleton width={250} height={350} />
          </div>
          <div className="mx-2 my-2">
            <Skeleton width={250} height={350} />
          </div>
          <div className="mx-2 my-2">
            <Skeleton width={250} height={350} />
          </div>
          <div className="mx-2 my-2">
            <Skeleton width={250} height={350} />
          </div>
          <div className="mx-2 my-2">
            <Skeleton width={250} height={350} />
          </div>
          <div className="mx-2 my-2">
            <Skeleton width={250} height={350} />
          </div>
          <div className="mx-2 my-2">
            <Skeleton width={250} height={350} />
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  wrap: "flex flex-wrap justify-center",
};

export default MoviesListSkeleton;
