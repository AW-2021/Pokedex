import logo4 from "./assets/images/logo4.png";
// import ogLogo from "./assets/images/og-logo.png";
// import pokeball from "./assets/images/pokeball.png";
import pokeball2 from "./assets/images/pokeball2.webp";
import pokeball3 from "./assets/images/pokeball3.png";

const App = () => {
  //const image: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`;
  //const image2: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg`;

  return (
    <div>
      <img src={logo4} />
      <div>
        <img src={pokeball2} />
        <span>{" "}Pokémon Search App{" "}</span>
        <img src={pokeball2} />
      </div>

      <div id="pokedex">
        <form id="search-form">
          <label htmlFor="search-input">
            Search for a Pokémon Name or ID:
          </label>
          <input
            id="search-input"
            name="search-input"
            type="text"
            required
          />
          <button
            type="submit"
            id="search-button"
          >
            Search
          </button>
        </form>

        <div
          id="output"
        >
          <div id="name-and-id">
            <span id="pokemon-name"></span>
            <span id="pokemon-id"></span>
          </div>

          <div id="size">
            <span id="weight"></span>
            <span id="height"></span>
          </div>
          <div id="sprite-container">
            <img id="sprite" src="" />
          </div>
          <div id="types">
            <span id="type-water">Water</span>{" "}
            {/* Have to loop over types array to create a single 'type' component for each */}
          </div>
        </div>

        <div id="base-stats-div">
          <table>
            <tr>
              <th>Base</th>
              <th>Stats</th>
            </tr>
            <tr>
              <td>HP:</td>
              <td id="hp"></td>
            </tr>
            <tr>
              <td>Attack:</td>
              <td id="attack"></td>
            </tr>
            <tr>
              <td>Defense:</td>
              <td id="defense"></td>
            </tr>
            <tr>
              <td>Sp.Attack:</td>
              <td id="special-attack"></td>
            </tr>
            <tr>
              <td>Sp.Defense:</td>
              <td id="special-defense"></td>
            </tr>
            <tr>
              <td>Speed:</td>
              <td id="speed"></td>
            </tr>
          </table>
        </div>
      </div>
      <img src={pokeball3} />
    </div>
  );
};

export default App;
