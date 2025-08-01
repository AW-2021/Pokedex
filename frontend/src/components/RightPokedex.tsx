import pokedexRight from "../assets/images/pokedex-copy.png";
import { type Pokemon } from "../lib/types";
import SizeDiv from "./SizeDiv";
import Table from "./Table";

interface RightProps {
  pokemon: Pokemon | null;
}

const RightPokedex = ({ pokemon }: RightProps) => {
  return (
    <div
      id="right-pokedex"
      className="h-full border-0 border-blue-700 relative"
    >
      <img
        src={pokedexRight}
        className="max-h-[750px] border-0 border-amber-300 object-contain"
      />

      <div className="absolute top-[21.5%] left-[8%] h-[68%] w-[75%] bg-emerald-400 border-2 border-gray-900 rounded-2xl p-3 flex flex-col justify-center items-center gap-4 inset-shadow-sm inset-shadow-black ">
        <SizeDiv pokemon={pokemon} />
        {pokemon?.stats && <Table pokemon={pokemon} />}
      </div>
    </div>
  );
};

export default RightPokedex;
