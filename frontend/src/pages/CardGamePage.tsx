import { useEffect, useState } from "react";
import ogLogo from "../assets/images/og-logo.png";
import pikachu from "../assets/images/runningpika.webp";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { type CardType } from "../types";
import GameNavbar from "../components/GameNavbar";

const ARR_LENGTH: number = 24;

const CardGamePage = () => {
  
  const [cards, setCards] = useState<CardType[] | null>(null);
  const [chosenCards, setChosenCards] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cards`);
        const data = await res.json();
        setCards(data?.data?.slice(0, ARR_LENGTH));
      } catch (err) {
        console.log("Error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleClick = (id: string) => {
    console.log(id);

    if (chosenCards.includes(id)) {
      // Reset game
      score > highScore && setHighScore(score);
      setScore(0);
      setChosenCards([]);
    } else {
      setScore((prevScore) => prevScore + 1);
      setChosenCards((prevCards) => [...prevCards, id]);
    }

    console.log(chosenCards);

    const cardsSet: Set<CardType> = new Set();

    if (cards) {
      while (cardsSet.size < cards?.length) {
        const index: number = Math.floor(Math.random() * cards?.length);
        cardsSet.add(cards[index]);
      }
      setCards(Array.from(cardsSet));
    }
    console.log(cardsSet);
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center bg-dark-blue font-display text-white">
      
      <GameNavbar />
      <Hero logo={ogLogo} title="Memory Card Game" cssStyle="h-34 mb-6" hasShadow={false} />

      {loading ? (
        <div className="my-auto mx-auto flex flex-col items-center gap-10">
          <img src={pikachu} alt="Loading..." className="max-w-[20rem]" />
          <p className="text-lg font-semibold tracking-widest text-shadow-lg text-shadow-black ">
            LOADING ....
          </p>
        </div>
      ) : (
        <div className="w-full py-4 px-16 border-0 border-yellow-300 my-6 flex flex-col justify-center items-center gap-8">
          <div className="w-full border-0 border-purple-600 flex justify-between items-center">
            <div className="border-0 border-red-600">
              <p className="text-shadow-lg text-shadow-black">
                Get points by clicking on an image
              </p>
              <p className="text-shadow-lg text-shadow-black">
                but don't click on any more than once!
              </p>
            </div>
            <div className="border-0 border-cyan-400">
              <p className="text-shadow-lg text-shadow-black">
                <span className="text-shadow-none">🎲</span> Score:{" "}
                <span className="font-bold">{score}</span>
              </p>
              <p className="text-shadow-lg text-shadow-black">
                <span className="text-shadow-none">⭐️ </span> High Score:{" "}
                <span className="font-bold">{highScore}</span>
              </p>
            </div>
          </div>

          {/* <div className="border-2 border-emerald-600 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-[minmax(400px,2fr)] grid-flow-row gap-10"> */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {cards?.map((card) => (
              <Card key={card.id} card={card} handleClick={handleClick} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardGamePage;
