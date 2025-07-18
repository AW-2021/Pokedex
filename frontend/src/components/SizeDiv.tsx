import { type Pokemon } from "../types";

interface SizeProps {
    pokemon: Pokemon | null;
}
const SizeDiv = ({ pokemon }: SizeProps) => {
  return (
    <div id="size" className="text-[min(2vw,1rem)] border-0 border-pink-600">
      <p id="weight" className="italic inline">{pokemon?.weight && "Weight: "}<span className="not-italic">{pokemon?.weight && pokemon?.weight}</span></p>{" "}
      <p id="height" className="italic inline">{pokemon?.height && "Height: "}<span className="not-italic">{pokemon?.height && pokemon?.height}</span></p>
    </div>
  );
};

export default SizeDiv;
