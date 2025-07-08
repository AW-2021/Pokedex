interface Sprite {
  front_default: string;
}

interface PokeType {
  slot: number;
  type: {
    name: string;
  }
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  }
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