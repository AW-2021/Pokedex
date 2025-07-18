import { typeColors } from "../utils/typeColors";
import { type Pokemon } from "../types";

interface OutputProps {
  pokemon: Pokemon | null;
}

const OutputDiv = ({ pokemon }: OutputProps) => {
  const baseTypeClass: string = "w-[min(10vw,4.5rem)] p-0.5 md:p-1 flex items-center justify-center rounded-md uppercase text-[min(1.4vw,0.75rem)] inset-shadow-xs inset-shadow-black";

  return (
    <div
      id="output"
      className="absolute left-[22.4%] bottom-[45.2%] h-[27.2%] w-[53.3%] px-3 py-0.5 bg-game-4 bg-cover border-0 border-yellow-400 rounded-xl flex flex-col justify-around gap-1"
    >
      <div id="sprite-container" className="border-0 border-indigo-500 h-[70%]">
        {pokemon?.sprites && (
          <img
            id="sprite"
            src={
              pokemon?.sprites.versions["generation-v"]["black-white"].animated
                .front_default || pokemon?.sprites.front_default
            }
            alt={pokemon?.name + " sprite"}
            className={`${pokemon?.id < 650 ? "h-full m-auto" : "h-full m-auto"}`}
          />
        )}
      </div>

      <div
        id="types-container"
        className="flex justify-start gap-2 border-0 border-red-500"
      >
        {pokemon?.types.map((pokeType, index) => (
          <span
            key={index}
            id={"type-" + pokeType.type.name}
            className={`${baseTypeClass} ${typeColors[pokeType.type.name] || "bg-red-400"}`}
          >
            {pokeType.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OutputDiv;
