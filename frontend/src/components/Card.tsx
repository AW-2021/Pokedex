import { type CardType } from "../types";
interface CardProps {
  card: CardType;
  handleClick: (id: string) => void;
}

const Card = ({ card, handleClick }: CardProps) => {
  
  return (
    <div onClick={() => handleClick(card.id)} className="bg-medium-blue p-4 rounded-lg cursor-pointer hover:shadow-amber-400 hover:shadow-lg">
      <img src={card.images.small} alt={card.name} className="mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-center">{card.name}</h2>
    </div>
  );
};

export default Card;