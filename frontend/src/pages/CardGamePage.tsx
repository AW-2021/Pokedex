import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ogLogo from "../assets/images/og-logo.png";
import pokedexIcon from "../assets/images/pokedexIcon.png";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { type CardType } from "../types"

const CardGamePage = () => {
  const [cards, setCards] = useState<CardType[] | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        // const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cards`);
        const res = await fetch(`http://localhost:8000/api/cards`);
        const data = await res.json();
        setCards(data.data);
      } catch(err) {
        console.log("Error", err);
      }
    }

    fetchCards();
  }, []);

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center bg-dark-blue font-display text-white">
      <Link to="/" className=" absolute top-2 -left-1 h-[min(18vw,12rem)] -rotate-6">
        <img src={pokedexIcon} alt="pokedex icon" className="z-10 h-full" />
      </Link>

      <Hero logo={ogLogo} title="Memory Card Game" cssStyle="h-34 mb-6" hasShadow={false} />
      
      <div className="w-full py-4 px-10 border-0 border-yellow-300 my-6 flex flex-col justify-center items-center gap-8">

        <div className="w-full border-0 border-purple-600 flex justify-between items-center">
          <div className="border-0 border-red-600">
            <p>Get points by clicking on an image</p> 
            <p>but don't click on any more than once!</p>
          </div>
          <div className="border-1 border-cyan-400">
            <p>Score: 0</p>
            <p>Best Score: 0</p>
          </div>
        </div>

        {/* <div className="border-2 border-emerald-600 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-[minmax(400px,2fr)] grid-flow-row gap-10"> */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            cards?.map(card => (
              <Card key={card.id} card={card} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CardGamePage;