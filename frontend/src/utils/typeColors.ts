import { type PType, type CType, type Type } from "../lib/types";

const typeColors: Record<Type, string> = {
  fighting: "bg-orange-700",
  fire: "bg-[#fd7d24]",
  water: "bg-[#42a1ff]",
  grass: "bg-[#9bcc50]",
  psychic: "bg-[#ff66a3]",
  dragon: "bg-gradient-to-b from-[#53a4cf] from-50% to-[#f16e57] to-50%",
  fairy: "bg-[#fdb9e9]",
};

export const pokeTypeColors: Record<PType, string> = {
  normal: "bg-[#b7b7aa]",
  flying: "bg-gradient-to-b from-[#3dc7ef] from-50% to-[#bdb9b8] to-50%",
  poison: "bg-[#c68bb7]",
  ground: "bg-gradient-to-b from-[#f7de3f] from-50% to-[#ab9842] to-50%",
  rock: "bg-[#baaa66]",
  bug: "bg-emerald-500",
  ghost: "bg-[#9995d0]",
  steel: "bg-[#9eb7b8]",
  electric: "bg-[#fecc33]",
  ice: "bg-[#66ccfe]",
  dark: "bg-[#b59682]",
  stellar: "bg-gradient-rainbow",
  unknown: "bg-red-500",
  ...typeColors
};


export const cardTypeColors: Record<CType, string> = {
  metal: "bg-[#9eb7b8]",
  darkness: "bg-[#b59682]",
  lightning: "bg-[#fecc33]",
  colorless: "border-1 border-white ",
  ...typeColors
};
