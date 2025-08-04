// import cards from "../assets/images/cards.png";
import HomeNavbar from "../components/HomeNavbar";
import Hero from "../components/Hero";
import Pokedex from "../components/Pokedex";
import logo2 from "../assets/images/logo2.png";

const HomePage = () => {
  return (
    <div className="bg-game-2 bg-fixed xl:bg-cover font-display h-screen w-full sm:h-full flex flex-col items-center ">
      <HomeNavbar />
      <Hero logo={logo2} title="Pokémon Search App" cssStyle="h-32 mb-4" hasShadow={true} />
      <Pokedex />
    </div>
  );
};

export default HomePage;
