import { useState } from "react";
import logo4 from "./assets/images/logo4.png";
import pokeball2 from "./assets/images/pokeball2.webp";
import pokeball3 from "./assets/images/pokeball3.png";
import { type Pokemon } from "./types";
import { typeColors } from "./utils/typeColors";

const App = () => {
  //const image: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`;
  //const image2: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg`;
  
  const [nameOrId, setNameOrId] = useState<string>("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const tableDataStyle: string = "border-3 border-white p-[0.6rem]";
  const baseTypeClass: string = "w-18 p-1 text-xs flex items-center justify-center rounded-md uppercase";

  const baseStats: string[] = [
    "Hp",
    "Attack",
    "Defense",
    "Special Attack",
    "Special Defense",
    "Speed",
  ];

  const fetchPokemon = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <div className="bg-dark-blue font-display h-full flex flex-col items-center">
      <img src={logo4} className="h-32 w-auto my-6 z-10" />
      <div className="z-10">
        <img src={pokeball2} className="h-9 w-auto inline align-top" />
        <span className="text-white font-bold text-3xl">
          {" "}
          Pokémon Search App{" "}
        </span>
        <img src={pokeball2} className="h-9 w-auto inline align-top" />
      </div>

      <div
        id="pokedex"
        className="z-10 bg-white w-[450px] my-8 px-4 py-5 rounded-2xl shadow-[10px_10px_grey] flex flex-col justify-center items-center gap-2"
      >
        <form id="search-form" className="mb-3 mt-1" onSubmit={fetchPokemon}>
          <label htmlFor="search-input" className="block mb-3">
            Search for a Pokémon Name or ID:
          </label>
          <input
            id="search-input"
            name="search-input"
            type="text"
            value={nameOrId}
            onChange={(e) => setNameOrId(e.target.value)}
            className="p-3 mr-3 outline-1 rounded-md focus:outline-3 focus:outline-blue-700 focus:rounded-md"
            required
          />
          <button
            type="submit"
            id="search-button"
            className="w-25 py-4 rounded-full bg-[#7f21ab] text-white text-sm hover:cursor-pointer"
          >
            Search
          </button>
        </form>

        <div
          id="output"
          className="w-full min-h-[325px] p-3 flex flex-col justify-center"
        >
          <div id="name-and-id" className="h-7 mb-1 text-lg">
            <span id="pokemon-name" className="uppercase">
              {pokemon?.name}
            </span>{" "}
            <span id="pokemon-id">{pokemon?.id && "#" + pokemon?.id}</span>
          </div>

          <div id="size" className="text-sm">
            <span id="weight">
              {pokemon?.weight && "Weight: " + pokemon?.weight}
            </span>{" "}
            <span id="height">
              {pokemon?.height && "Height: " + pokemon?.height}
            </span>
          </div>

          <div
            id="sprite-container"
            className="flex items-center justify-center grow-2"
          >
            {pokemon?.sprites && (
              <img
                id="sprite"
                src={pokemon?.sprites.front_default}
                alt={pokemon?.name + " sprite"}
                className="w-52"
              />
            )}
          </div>

          <div
            id="types"
            className="min-h-8 flex flex-wrap justify-start gap-2"
          >
            {pokemon?.types.map((pokeType, index) => (
              <span
                key={index}
                id={"type-" + pokeType.type.name}
                className={`${baseTypeClass} ${typeColors[pokeType.type.name] || 'bg-red-400'}`}
              >
                {pokeType.type.name}
              </span>
            ))}
          </div>
        </div>

        <div id="base-stats-div" className="w-full max-w-[450px]">
          <table className="w-full bg-[#7f21ab] text-white text-center">
            <tbody>
              <tr>
                <th className={tableDataStyle}>Base</th>
                <th className={tableDataStyle}>Stats</th>
              </tr>
              {pokemon?.stats
                ? pokemon?.stats.map((pokeStat) => (
                    <tr>
                      <td className={`${tableDataStyle} w-3/5 capitalize`}>
                        {pokeStat.stat.name.replace(/-/g, " ")}:
                      </td>
                      <td
                        className={`${tableDataStyle} w-2/5`}
                        id={pokeStat.stat.name}
                      >
                        {pokeStat.base_stat}
                      </td>
                    </tr>
                  ))
                : baseStats.map((base) => (
                    <tr>
                      <td className={`${tableDataStyle} w-3/5`}>{base}:</td>
                      <td className={`${tableDataStyle} w-2/5`}></td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>

      <img src={pokeball3} className="fixed bottom-0 left-0" />
    </div>
  );
};

export default App;
