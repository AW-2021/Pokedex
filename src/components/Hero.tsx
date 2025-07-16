import pokeball2 from "../assets/images/pokeball2.webp";

interface HeroProps {
  logo: string;
  title: string;
  cssStyle: string;
  hasShadow: boolean;
}

const Hero = ({ logo, title, cssStyle, hasShadow }: HeroProps) => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        className={cssStyle +` w-auto mt-6 z-20 drop-shadow-lg drop-shadow-amber-400`}
      />
      <div className="z-20 mb-2">
        <img
          src={pokeball2}
          className="h-9 w-auto inline align-top animate-bounce"
        />
        <span className={`font-bold text-3xl ${hasShadow && "text-shadow-sm text-shadow-white"}`}>
          {" "}{title}{" "}
        </span>
        <img
          src={pokeball2}
          className="h-9 w-auto inline align-top animate-bounce"
        />
      </div>
    </>
  );
};

export default Hero;
