import { IoMdSearch } from "react-icons/io";
import { type ButtonAction } from "./Pokedex";
import ArrowButtons from "./ArrowButtons";

interface FormProps {
  fetchPokemon: (event: React.FormEvent<HTMLFormElement>) => void;
  nameOrId: string;
  setNameOrId: React.Dispatch<React.SetStateAction<string>>;
  setBtnType: React.Dispatch<React.SetStateAction<ButtonAction>>;
};

const Form = ({ fetchPokemon, nameOrId, setNameOrId, setBtnType }: FormProps) => {
  return (
    <div
        id="form-div"
        className="absolute left-[15%] bottom-[9%] h-[27%] w-[67%] border-0 border-blue-600"
      >
        <form id="search-form" onSubmit={fetchPokemon}>
          <input
            id="search-input"
            name="search-input"
            type="text"
            value={nameOrId}
            onChange={(e) => setNameOrId(e.target.value)}
            autoFocus
            className="absolute bottom-[9%] left-[14%] h-[45%] w-[47%] px-2 text-xs sm:text-sm border-0 border-white rounded-xl bg-transparent placeholder:text-wrap placeholder:text-center placeholder:text-[min(1.4vw,0.9rem)] focus:outline-3 focus:sm:outline-4 focus:outline-black cursor-text"
            placeholder="Search Pokémon Name or ID:"
          />
          <button
            type="submit"
            id="search-button"
            onClick={() => setBtnType("search")}
            className="absolute top-[6%] left-[1%] h-[26%] w-[15%] rounded-full text-white border-0 border-emerald-500 hover:cursor-pointer"
          >
            <IoMdSearch className="h-[67%] w-full hover:h-[61%]" />
          </button>
          <ArrowButtons setBtnType={setBtnType} />
        </form>
      </div>
  )
}

export default Form