import { useState } from "react";
import card from "../assets/images/card.webp";
import pokemonCards from "../assets/images/pokemoncards.png";
import useScreenSize from "../hooks/useScreenSize";
import { FaGamepad } from "react-icons/fa";

const Navbar = () => {
  const [showText, setShowText] = useState<boolean>(false);
  const screenSize: string = useScreenSize();

  const handleMouseEnterLeave = () => {
    setShowText((prevState) => !prevState);
  };

  return (
    <div
      onMouseEnter={handleMouseEnterLeave}
      onMouseLeave={handleMouseEnterLeave}
      className="fixed top-2 right-2 sm:top-0 sm:right-0  h-[min(18vw,12rem)] hover:h-[min(17vw,13rem)] hover:cursor-pointer hover:drop-shadow-2xl hover:drop-shadow-indigo-600 text-[0.8rem]"
    >
      {screenSize === "sm" ? (
        <FaGamepad className="h-[60%] w-full p-2 border-4 border-indigo-800 text-indigo-800 bg-yellow-300 inset-ring-4 inset-ring-yellow-500 rounded-full" />
      ) : screenSize === "md" ? (
        <img src={card} alt="Memory Game" className="z-10 h-full" />
      ) : (
        <img src={pokemonCards} alt="Memory Game" className="z-10 h-full" />
      )}

      {showText && (
        <p className="z-10 h-full text-center font-semibold">
          Play the <p>Memory Game →</p>
        </p>
      )}
    </div>
  );
};

export default Navbar;
