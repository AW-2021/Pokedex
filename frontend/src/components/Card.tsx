import { type CardType } from "../types";
interface CardProps {
  card: CardType;
}

const Card = ({ card }: CardProps) => {

  const handleClick = () => {
    console.log("HELLO!");
  }

  return (
    <div onClick={handleClick} className="bg-medium-blue p-4 rounded-lg hover:shadow-amber-400 hover:shadow-lg">
      <img src={card.images.small} alt={card.name} className="mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-center">{card.name}</h2>
    </div>
  );
};

export default Card;