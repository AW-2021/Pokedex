import pokedex from "../assets/images/pokedex.png";
import { type Pokemon } from "../types";
import { type ButtonAction } from "./Pokedex";
import OutputDiv from "./OutputDiv";
import NameIdDiv from "./NameIdDiv";
import Form from "./Form";

interface LeftProps {
  pokemon: Pokemon | null;
  fetchPokemon: (event: React.FormEvent<HTMLFormElement>) => void;
  nameOrId: string;
  setNameOrId: React.Dispatch<React.SetStateAction<string>>;
  setBtnType: React.Dispatch<React.SetStateAction<ButtonAction>>;
}

const LeftPokedex = ({
  pokemon,
  fetchPokemon,
  nameOrId,
  setNameOrId,
  setBtnType
}: LeftProps) => {
  return (
    <div
      id="left-pokedex"
      className="h-full border-0 border-green-600 relative"
    >
      <img src={pokedex} className="max-h-[750px] object-contain" />
      <OutputDiv pokemon={pokemon} />
      <NameIdDiv pokemon={pokemon} />
      <Form pokemon={pokemon} fetchPokemon={fetchPokemon} nameOrId={nameOrId} setNameOrId={setNameOrId} setBtnType={setBtnType} />
    </div>
  );
};

export default LeftPokedex;
