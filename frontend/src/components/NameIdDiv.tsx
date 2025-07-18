import { type Pokemon } from "../types";

interface OutputProps {
  pokemon: Pokemon | null;
}

const NameIdDiv = ({ pokemon }: OutputProps) => {
  return (
    <div
      id="name-and-id"
      className="absolute left-[37%] bottom-[38%] h-[6%] w-[40%] py-1 md:py-2 border-0 border-fuchsia-500 bg-[#bdbdbd] text-[min(1.7vw,1.1rem)] overflow-y-auto"
    >
      <span id="pokemon-id">{pokemon?.id && "#" + pokemon?.id}</span>{" "}
      <span id="pokemon-name" className="uppercase">
        {pokemon?.name}
      </span>
    </div>
  );
};

export default NameIdDiv;
