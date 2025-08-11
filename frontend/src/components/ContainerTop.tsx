import { cTypeArr, type CType } from "../lib/types";
import { cardTypeColors } from "../utils/typeColors";

interface ContainerTopProps {
  score: number;
  highScore: number;
  type: CType;
  setType: React.Dispatch<React.SetStateAction<CType>>;
}

const ContainerTop = ({
  score,
  highScore,
  type,
  setType,
}: ContainerTopProps) => {
  return (
    <div className="w-full border-0 border-purple-600 flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between">
      <div className="w-full md:w-2/5 text-center md:text-start rounded border-2 md:border-0 border-[#3167d1] p-2 md:p-0 text-shadow-lg text-shadow-black italic">
        <p className="inline md:block">
          Get points by clicking on an image{" "}
        </p>
        <p className="inline md:block">
          but don't click on any more than once!
        </p>
      </div>

      <div className="w-full md:w-3/5 border-0 border-cyan-400 uppercase flex items-center justify-between md:justify-end md:gap-12">
        <select
          id="type-select"
          name="type-select"
          value={type}
          onChange={(e) => setType(e.target.value as CType)}
          className={`py-3 px-1 ${cardTypeColors[type]} rounded uppercase tracking-wide text-shadow-md text-shadow-black`}
        >
          {cTypeArr.map((cardType, index) => (
            <option key={index} value={cardType}>{cardType}</option>
          ))}
        </select>

        <div className="text-shadow-lg text-shadow-black">
          <p>
            <span className="text-shadow-none">🎲</span> Score:{" "}
            <span className="font-bold">{score}</span>
          </p>
          <p>
            <span className="text-shadow-none">⭐️</span> High Score:{" "}
            <span className="font-bold">{highScore}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContainerTop;
