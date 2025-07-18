import { IoMdSearch } from "react-icons/io";

interface FormProps {
  fetchPokemon: (event: React.FormEvent<HTMLFormElement>) => void;
  nameOrId: string;
  setNameOrId: React.Dispatch<React.SetStateAction<string>>;
};

const Form = ({ fetchPokemon, nameOrId, setNameOrId }: FormProps) => {
  return (
    <div
        id="form-div"
        className="absolute left-[14%] bottom-[9%] h-[27%] w-[46%] border-0 border-blue-600"
      >
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
          >
            <IoMdSearch className="h-[67%] w-full hover:h-[60%]" />
          </button>
        </form>
      </div>
  )
}

export default Form