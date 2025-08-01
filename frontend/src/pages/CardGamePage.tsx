import { useEffect, useState } from "react";
import { type CardType } from "../lib/types";
import ogLogo from "../assets/images/og-logo.png";
import Hero from "../components/Hero";
import GameNavbar from "../components/GameNavbar";
import Loader from "../components/Loader";
import GameContainer from "../components/GameContainer";

const ARR_LENGTH: number = 24;

const CardGamePage = () => {
  const [cards, setCards] = useState<CardType[] | null>(null);
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

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center bg-dark-blue font-display text-white">
      <GameNavbar />
      <Hero logo={ogLogo} title="Memory Card Game" cssStyle="h-34 mb-6" hasShadow={false} />
      {loading ? <Loader /> : <GameContainer cards={cards} setCards={setCards} /> }
    </div>
  );
};

export default CardGamePage;
