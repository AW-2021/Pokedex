import pikachu from "../assets/images/runningpika.webp";

const Loader = () => {
  return (
    <div className="my-auto flex flex-col items-center justify-center gap-10 mt-10">
      <img src={pikachu} alt="Loading..." className="max-w-[20rem]" />
      <p className="text-lg font-semibold uppercase text-shadow-lg text-shadow-black">
        CATCHING THEM ALL ....
      </p>
    </div>
  );
};

export default Loader;
