import { Link } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import pokedexIcon from "../assets/images/pokedexIcon.png";
import { IoIosBook } from "react-icons/io";

const GameNavbar = () => {
  const screenSize: string = useScreenSize();

  return (
    <Link
      to="/"
      className="absolute top-4 left-3 h-[min(17vw,11rem)] hover:drop-shadow-blue-400 hover:drop-shadow-xl text-"
    >
      {screenSize === "sm" ? (
        <IoIosBook className="h-[58%] w-full p-2 border-4 border-blue-600 text-blue-600 bg-yellow-300 inset-ring-4 inset-ring-yellow-500 rounded-full" />
      ) : (
        <img src={pokedexIcon} alt="pokedex icon" className="z-10 h-full" />
      )}
    </Link>
  );
};

export default GameNavbar;
