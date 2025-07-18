import pokedex from "../assets/images/pokedex.png";
import { type Pokemon } from "../types";
import OutputDiv from "./OutputDiv";
import NameIdDiv from "./NameIdDiv";
import Form from "./Form";
import ArrowButtons from "./ArrowButtons";

interface LeftProps {
  pokemon: Pokemon | null;
  fetchPokemon: (event: React.FormEvent<HTMLFormElement>) => void;
  nameOrId: string;
  setNameOrId: React.Dispatch<React.SetStateAction<string>>;
}

const LeftPokedex = ({
  pokemon,
  fetchPokemon,
  nameOrId,
  setNameOrId,
}: LeftProps) => {
  return (
    <div
      id="left-pokedex"
      className="h-full border-0 border-green-600 relative"
    >
      <img src={pokedex} className="max-h-[750px] object-contain" />
      <OutputDiv pokemon={pokemon} />
      <NameIdDiv pokemon={pokemon} />
      <Form fetchPokemon={fetchPokemon} nameOrId={nameOrId} setNameOrId={setNameOrId} />
      <ArrowButtons />
    </div>
  );
};

export default LeftPokedex;
