import pikachu from "../assets/images/runningpika.webp";

const Loader = () => {
  return (
    <div className="my-auto mx-auto flex flex-col items-center gap-10">
      <img src={pikachu} alt="Loading..." className="max-w-[20rem]" />
      <p className="text-lg font-semibold tracking-widest text-shadow-lg text-shadow-black ">
        LOADING ....
      </p>
    </div>
  );
};

export default Loader;
