import { useState } from "react";
import { type Pokemon } from "../types";
import LeftPokedex from "./LeftPokedex";
import RightPokedex from "./RightPokedex";

const Pokedex = () => {
  const [nameOrId, setNameOrId] = useState<string>("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const fetchPokemon = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const apiUrl: string = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.log("Error: ", error);
      alert("Pokemon not found!");
      setPokemon(null);
    }
  };

  return (
    <div
      id="pokedex"
      className="z-20 border-0 border-red-600 mb-2 drop-shadow-xl drop-shadow-black flex justify-center items-center"
    >
      {/* Left Pokedex Panel */}
      <LeftPokedex pokemon={pokemon} fetchPokemon={fetchPokemon} nameOrId={nameOrId} setNameOrId={setNameOrId} />
      {/* Right Pokedex Panel */}
      <RightPokedex pokemon={pokemon} />
    </div>
  );
};

export default Pokedex;
