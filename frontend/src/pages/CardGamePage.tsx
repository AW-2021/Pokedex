import { Link } from "react-router-dom";
import ogLogo from "../assets/images/og-logo.png";
import pokedexIcon from "../assets/images/pokedexIcon.png";
import Card from "../components/Card";
import Hero from "../components/Hero";

const CardGamePage = () => {
  const numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="bg-dark-blue font-display text-white w-full h-full flex flex-col items-center">
      <Link to="/" className=" absolute top-2 -left-1 h-[min(18vw,12rem)] -rotate-6">
        <img src={pokedexIcon} alt="pokedex icon" className="z-10 h-full" />
      </Link>

      <Hero logo={ogLogo} title="Memory Card Game" cssStyle="h-34 mb-6" hasShadow={false} />
      
      <div className="border-2 border-yellow-300 w-11/12 my-6 flex flex-col justify-center gap-6">

        <div className="border-1 border-purple-600 flex justify-between items-center">
          <div className="border-1 border-red-600">
            <p>Get points by clicking on an image</p> 
            <p>but don't click on any more than once!</p>
          </div>
          <div className="border-1 border-cyan-400">
            <p>Score: 0</p>
            <p>Best Score: 0</p>
          </div>
        </div>

        <div className="border-2 border-emerald-600 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-[minmax(400px,2fr)] grid-flow-row gap-10">
          {
            numArray.map((num, index) => (
              <Card key={index} num={num} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CardGamePage;