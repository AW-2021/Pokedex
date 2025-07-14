// import cards from "../assets/images/cards.png";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pokedex from "../components/Pokedex";

const HomePage = () => {
  return (
    <div className="bg-game-2 bg-fixed font-display h-screen w-full sm:h-full flex flex-col items-center ">
      <Navbar />
      <Hero />
      <Pokedex />
    </div>
  );
};

export default HomePage;
