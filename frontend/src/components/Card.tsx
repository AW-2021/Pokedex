interface CardProps {
    num: number;
}

const Card = ({ num }: CardProps) => {
  return (
    <div className="border-1 border-white">Card {num}</div>
  )
}

export default Card