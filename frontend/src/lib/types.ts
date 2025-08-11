const typeArr = [
  "fire",
  "grass",
  "water",
  "fairy",
  "psychic",
  "dragon",
  "fighting",
] as const;

export type Type = (typeof typeArr)[number];

const pTypeArr = [
  "dark",
  "electric",
  "ghost",
  "ice",
  "normal",
  "poison",
  "rock",
  "steel",
  "bug",
  "ground",
  "flying",
  "stellar",
  "unknown",
  ...typeArr
] as const;

export type PType = (typeof pTypeArr)[number];

export const cTypeArr = [
  "metal",
  "darkness",
  "lightning",
  "colorless",
  ...typeArr
] as const;

export type CType = (typeof cTypeArr)[number];

interface Other {
  dream_world: {
    front_default: string | null;
  }
  "official-artwork": {
    front_default: string;
  }
}

interface Versions {
  "generation-v": {
    "black-white": {
      animated: {
        front_default: string;
      }
    }
  }
}

interface Sprite {
  front_default: string;
  other: Other;
  versions: Versions;
}

interface PokeType {
  slot: number;
  type: {
    name: PType;
  }
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: Sprite;
  types: PokeType[];
  stats: Stat[];
}

export interface CardType {
  id: string;
  name: string;
  supertype: string;
  hp: string;
  types: string[];
  flavorText: string;
  images: {
    small: string;
    large: string;
  }
}