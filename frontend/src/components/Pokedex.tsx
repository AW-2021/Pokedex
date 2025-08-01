import { useState } from "react";
import { type Pokemon } from "../types";
import LeftPokedex from "./LeftPokedex";
import RightPokedex from "./RightPokedex";

export type ButtonAction = "left" | "right" | "search" | null;

const MAX_POKEMON_ID = 1025; // Maximum Pokémon ID in the API

const Pokedex = () => {
  const [nameOrId, setNameOrId] = useState<string>("");
  const [btnType, setBtnType] = useState<ButtonAction>(null);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const fetchPokemon = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let inputStr: string = nameOrId.trim();
    
    if (!inputStr && btnType === "search") {
      alert("Please enter a Pokémon name or ID!");
      return;
    }

    if (btnType === "left" || btnType === "right") {
      if (pokemon) {
        const currentId: number = pokemon.id;

        if (btnType === "left") {
          if (currentId > 1) {
            inputStr = (currentId - 1).toString();
          } else {
            inputStr = "1"; // Reset to 1 if you go left from first Pokémon
          }
        } else if (btnType === "right") { 
          if (currentId < MAX_POKEMON_ID) {
            inputStr = (currentId + 1).toString();
          } else {
            inputStr = "1"; // Reset to 1 if you go right from last Pokémon
          }
        }
      } else {
        inputStr = "1";
      }
    }

    const apiUrl: string = `https://pokeapi.co/api/v2/pokemon/${inputStr}`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.log("Error: ", error);
      alert("Pokemon not found!");
      setPokemon(null);
      setNameOrId(""); // Reset the input field if Pokémon not found
    }
  };

  return (
    <div
      id="pokedex"
      className="z-20 border-0 border-red-600 mb-2 drop-shadow-xl drop-shadow-black flex justify-center items-center"
    >
      {/* Left Pokedex Panel */}
      <LeftPokedex
        pokemon={pokemon}
        fetchPokemon={fetchPokemon}
        nameOrId={nameOrId}
        setNameOrId={setNameOrId}
        setBtnType={setBtnType}
      />
      {/* Right Pokedex Panel */}
      <RightPokedex pokemon={pokemon} />
    </div>
  );
};

export default Pokedex;
