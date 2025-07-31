interface ContainerTopProps {
    score: number;
    highScore: number;
}

const ContainerTop = ({ score, highScore }: ContainerTopProps) => {
  return (
    <div className="w-full border-0 border-purple-600 flex justify-between items-center">
      <div className="border-0 border-red-600">
        <p className="text-shadow-lg text-shadow-black">
          Get points by clicking on an image
        </p>
        <p className="text-shadow-lg text-shadow-black">
          but don't click on any more than once!
        </p>
      </div>
      <div className="border-0 border-cyan-400">
        <p className="text-shadow-lg text-shadow-black">
          <span className="text-shadow-none">🎲</span> Score:{" "}
          <span className="font-bold">{score}</span>
        </p>
        <p className="text-shadow-lg text-shadow-black">
          <span className="text-shadow-none">⭐️</span> High Score:{" "}
          <span className="font-bold">{highScore}</span>
        </p>
      </div>
    </div>
  );
};

export default ContainerTop;