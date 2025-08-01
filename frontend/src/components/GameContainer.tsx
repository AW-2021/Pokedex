import { useState } from "react";
import { type CardType } from "../lib/types";
import Card from "./Card";
import ContainerTop from "./ContainerTop";

interface ContainerProps {
    cards: CardType[] | null;
    setCards: React.Dispatch<React.SetStateAction<CardType[] | null>>;
}

const GameContainer = ({ cards, setCards }: ContainerProps) => {
  const [chosenCards, setChosenCards] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);

  const handleClick = (id: string) => {
    if (chosenCards.includes(id)) {
      // Reset game
      score > highScore && setHighScore(score);
      setScore(0);
      setChosenCards([]);
    } else {
      setScore((prevScore) => prevScore + 1);
      setChosenCards((prevCards) => [...prevCards, id]);
    }

    const cardsSet: Set<CardType> = new Set();

    if (cards) {
      while (cardsSet.size < cards?.length) {
        const index: number = Math.floor(Math.random() * cards?.length);
        cardsSet.add(cards[index]);
      }
      setCards(Array.from(cardsSet));
    }
  };

  return (
    <div className="w-full py-4 px-16 border-0 border-yellow-300 my-6 flex flex-col justify-center items-center gap-8">
      <ContainerTop score={score} highScore={highScore} />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards?.map((card) => (
          <Card key={card.id} card={card} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default GameContainer;
