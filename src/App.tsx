import { useState } from "react";
import logo4 from "./assets/images/logo4.png";
import pokeball2 from "./assets/images/pokeball2.webp";
import pokeball3 from "./assets/images/pokeball3.png";

interface Sprite {
  front_default: string;
}

interface Type {
  slot: number;
  type: {
    name: string;
  }
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  }
}

interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: Sprite;
  types: Type[];
  stats: Stat[];
}

const App = () => {
  //const image: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`;
  //const image2: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg`;
  const tableDataStyle: string = "border-2 border-white p-[0.6rem]";

  const [nameOrId, setNameOrId] = useState<string>('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

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
    }
  }

  console.log(pokemon);

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
        <form id="search-form" className="mb-3" onSubmit={fetchPokemon}>
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
            <span id="pokemon-name"></span>
            <span id="pokemon-id"></span>
          </div>

          <div id="size" className="text-sm">
            <span id="weight"></span>
            <span id="height"></span>
          </div>
          <div
            id="sprite-container"
            className="flex items-center justify-center grow-2"
          >
            <img id="sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png" className="w-52" />
          </div>
          <div
            id="types"
            className="min-h-8 flex flex-wrap justify-start gap-1"
          >
            <span
              className="bg-pink-300 w-18 p-1 text-xs flex items-center justify-center rounded-md"
              id="type-water"
            >
              Water
            </span>{" "}
            {/* Have to loop over types array to create a single 'type' component for each */}
          </div>
        </div>

        <div id="base-stats-div" className="w-full max-w-[450px]">
          <table className="w-full bg-[#7f21ab] text-white text-center">
            <tbody>
              <tr>
                <th className={tableDataStyle}>Base</th>
                <th className={tableDataStyle}>Stats</th>
              </tr>
              <tr>
                <td className={tableDataStyle}>HP:</td>
                <td className={tableDataStyle} id="hp"></td>
              </tr>
              <tr>
                <td className={tableDataStyle}>Attack:</td>
                <td className={tableDataStyle} id="attack"></td>
              </tr>
              <tr>
                <td className={tableDataStyle}>Defense:</td>
                <td className={tableDataStyle} id="defense"></td>
              </tr>
              <tr>
                <td className={tableDataStyle}>Sp.Attack:</td>
                <td className={tableDataStyle} id="special-attack"></td>
              </tr>
              <tr>
                <td className={tableDataStyle}>Sp.Defense:</td>
                <td className={tableDataStyle} id="special-defense"></td>
              </tr>
              <tr>
                <td className={tableDataStyle}>Speed:</td>
                <td className={tableDataStyle} id="speed"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <img src={pokeball3} className="fixed bottom-0 left-0" />
    </div>
  );
};

export default App;