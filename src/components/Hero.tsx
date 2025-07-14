import logo4 from "../assets/images/logo4.png";
import pokeball2 from "../assets/images/pokeball2.webp";

const Hero = () => {
  return (
    <>
      <img
        src={logo4}
        className="h-32 w-auto mt-6 mb-4 z-20 drop-shadow-lg drop-shadow-amber-400"
      />
      <div className="z-20">
        <img
          src={pokeball2}
          className="h-9 w-auto inline align-top animate-bounce"
        />
        <span className="font-bold text-3xl text-shadow-sm text-shadow-white">
          {" "}
          Pokémon Search App{" "}
        </span>
        <img
          src={pokeball2}
          className="h-9 w-auto inline align-top animate-bounce"
        />
      </div>
    </>
  );
};

export default Hero;
