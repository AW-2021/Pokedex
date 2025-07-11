import { useState } from "react";
import { type Pokemon } from "./types";
import { typeColors } from "./utils/typeColors";
import logo4 from "./assets/images/logo4.png";
import pokeball2 from "./assets/images/pokeball2.webp";
// import card from "./assets/images/card.webp";
// import cards from "./assets/images/cards.png";
import pokemonCards from "./assets/images/pokemoncards.png";
import pokedex from "./assets/images/pokedex.png";
import pokedexRight from "./assets/images/pokedex-copy.png";
//import pokedex7 from "./assets/images/pokedex7.svg";
//import pokedex77 from "./assets/images/pokedex7-copy.svg";
import { IoMdSearch } from "react-icons/io";

const App = () => {
  const [nameOrId, setNameOrId] = useState<string>("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [showText, setShowText] = useState<boolean>(false);

  const tableDataStyle: string = "border-3 border-white p-[0.6rem]";
  const baseTypeClass: string = "w-[min(10vw,4.5rem)] p-0.5 md:p-1 flex items-center justify-center rounded-md uppercase text-[min(1.4vw,0.75rem)] inset-shadow-xs inset-shadow-black";

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

  const handleMouseEnterLeave = () => {
    setShowText((prevState) => !prevState);
  };

  return (
    <div className="bg-dark-blue font-display h-full flex flex-col items-center bg-game-2 bg-fixed">
      <div
        onMouseEnter={handleMouseEnterLeave}
        onMouseLeave={handleMouseEnterLeave}
        className="fixed top-0 right-0 h-48 hover:h-52 hover:cursor-pointer hover:drop-shadow-2xl hover:drop-shadow-indigo-600 text-[0.8rem]"
      >
        <img src={pokemonCards} alt="Memory Game" className="z-10 h-full" />

        {showText && (
          <p className="z-10 h-full text-center font-semibold">
            Play the <p>Memory Game →</p>
          </p>
        )}
      </div>

      <img
        src={logo4}
        className="h-32 w-auto mt-6 mb-4 z-20 drop-shadow-lg drop-shadow-amber-400"
      />
      <div className="z-20">
        <img
          src={pokeball2}
          className="h-9 w-auto inline align-top animate-bounce"
        />
        <span className="font-bold text-3xl text-shadow-sm text-shadow-white"> Pokémon Search App </span>
        <img
          src={pokeball2}
          className="h-9 w-auto inline align-top animate-bounce"
        />
      </div>

      <div
        id="pokedex"
        className="z-20 border-0 border-red-600 my-2 drop-shadow-xl drop-shadow-black flex justify-center items-center"
      >
        {/* Left Pokedex Panel */}
        <div id="left-pokedex" className="h-full border-0 border-green-600 relative">
          <img src={pokedex} className="max-h-[750px] object-contain" />

          <div id="output" className="absolute left-[22.4%] bottom-[45.2%] h-[27.2%] w-[53.3%] px-3 py-0.5 bg-game-4 bg-cover border-0 border-yellow-400 rounded-xl flex flex-col justify-around gap-1">

            <div
              id="sprite-container"
              className="border-0 border-indigo-500 h-[80%]"
            >
              {pokemon?.sprites && (
                <img
                  id="sprite"
                  src={
                    pokemon?.sprites.versions["generation-v"]["black-white"]
                      .animated.front_default || pokemon?.sprites.front_default
                  }
                  alt={pokemon?.name + " sprite"}
                  className={`${pokemon?.id < 650 ? "h-full m-auto" : "h-full m-auto"}`}
                />
              )}
            </div>

            <div
              id="types"
              className="flex justify-start gap-2 border-0 border-red-500"
            >
              {pokemon?.types.map((pokeType, index) => (
                <span
                  key={index}
                  id={"type-" + pokeType.type.name}
                  className={`${baseTypeClass} ${
                    typeColors[pokeType.type.name] || "bg-red-400"
                  }`}
                >
                  {pokeType.type.name}
                </span>
              ))}
            </div>
          </div>

          <div id="name-and-id" className="absolute left-[37%] bottom-[38%] h-[6%] w-[40%] py-1 md:py-2 border-0 border-fuchsia-500 bg-[#bdbdbd] text-[min(1.7vw,1.1rem)] overflow-y-auto">
              <span id="pokemon-id">{pokemon?.id && "#" + pokemon?.id}</span>{" "}
              <span id="pokemon-name" className="uppercase">
                {pokemon?.name}
              </span>
          </div>
          
          <div id="form-div" className="absolute left-[14%] bottom-[9%] h-[27%] w-[46%] border-0 border-blue-600">
            <form id="search-form" onSubmit={fetchPokemon}>
              <input
                id="search-input"
                name="search-input"
                type="text"
                value={nameOrId}
                onChange={(e) => setNameOrId(e.target.value)}
                className="absolute bottom-[9%] right-[9%] h-[45%] w-[69%] px-2 text-xs sm:text-sm border-0 border-white rounded-xl bg-transparent placeholder:text-wrap placeholder:text-center focus:outline-0 cursor-text placeholder:text-[min(1.4vw,0.9rem)]"
                placeholder="Search Pokémon Name or ID:"
                required
              />
              <button
                type="submit"
                id="search-button"
                className="absolute top-[6%] left-[3%] h-[26%] w-[23%] rounded-full text-white border-0 border-emerald-500 hover:cursor-pointer"
              ><IoMdSearch className="h-[70%] w-full hover:h-[63%]" /></button>
            </form>
          </div>

          <div className="absolute right-[18%] bottom-[19%] h-[15%] w-[21%] border-1 border-cyan-300"></div>
        </div>

        {/* Right Pokedex Panel */}
        <div id="right-pokedex" className="h-full border-0 border-blue-700 relative">
          <img
            src={pokedexRight}
            className="max-h-[750px] border-0 border-amber-300 object-contain"
          />

          <div className="absolute top-[21.5%] left-[8%] h-[68%] w-[75%] bg-green-200 border-4 md:border-6 border-gray-900 rounded-3xl ">
            <div id="size" className="text-[min(1.5vw,0.9rem)] border-0 border-pink-600">
              <span id="weight">
                {pokemon?.weight && "Weight: " + pokemon?.weight}
              </span>{" "}
              <span id="height">
                {pokemon?.height && "Height: " + pokemon?.height}
              </span>
            </div>
          </div>

        </div>
      </div>

      <div className="z-20 bg-white w-[450px] my-8 px-4 py-5 rounded-2xl shadow-[10px_10px_grey] flex flex-col justify-center items-center gap-2">
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
            className="w-25 py-4 rounded-full bg-yellow-500 text-white text-sm hover:cursor-pointer"
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
                src={
                  pokemon?.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default || pokemon?.sprites.front_default
                }
                alt={pokemon?.name + " sprite"}
                className={`${pokemon?.id >= 650 ? "w-52" : "w-32"}`}
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
                className={`${baseTypeClass} ${
                  typeColors[pokeType.type.name] || "bg-red-400"
                }`}
              >
                {pokeType.type.name}
              </span>
            ))}
          </div>
        </div>

        <div id="base-stats-div" className="w-full max-w-[450px]">
          <table className="w-full bg-indigo-800 text-white text-center">
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
    </div>
  );
};

export default App;
