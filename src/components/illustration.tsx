import DeathStarVid from "../dist/videos/deathstar.mp4";

export const Illustration = () => {
  return (
    <video
      src={DeathStarVid}
      autoPlay
      loop
      muted
      className="w-[400px] select-none lg:w-[500px] xl:w-[800px] 2xl:w-[1000px]"
    />
  );
};
