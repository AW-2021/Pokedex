import { type ButtonAction } from "./Pokedex";

interface ButtonProps {
  setBtnType: React.Dispatch<React.SetStateAction<ButtonAction>>;
}

const ArrowButtons = ({ setBtnType }: ButtonProps) => {
  return (
    <div className="absolute right-[2.4%] top-[28%] h-[15%] w-[25.7%] flex justify-between items-center text-[10px] sm:text-sm md:text-lg text-white border-0 border-cyan-300">
      <button
        type="submit"
        id="left-button"
        onClick={() => setBtnType("left")}
        className="cursor-pointer hover:text-red-500"
      >
        ◀︎
      </button>
      <button
        type="submit"
        id="right-button"
        onClick={() => setBtnType("right")}
        className="cursor-pointer hover:text-red-500"
      >
        ▶︎ 
      </button>
    </div>
  );
};

export default ArrowButtons;
