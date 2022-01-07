import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MoviesListSkeleton = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full">
          <Skeleton height={500} width={"100%"} />
        </div>
        <div className="flex flex-wrap justify-center">
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

export default MoviesListSkeleton;
