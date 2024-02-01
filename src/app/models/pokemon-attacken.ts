import { PokemonType } from './pokemon-type';

const paralyseEffektFunktion = function erholungEffekt() {};

export type PokemonAttacke = {
  name: string;
  typ: PokemonType;
  value: number;
  specialEffect?: () => void;
};
const erholungEffektFunktion = function erholungEffekt() {
  // pkmn heilt sich + schläft ein
  // woher bekomm ich die information welches pokemon sich heilt
  // funktion hat immer EINGABE AUSGABE!!
};
export const Eisstrahl: PokemonAttacke = {
  name: 'Eisstrahl',
  typ: PokemonType.ICE,
  value: 70,
};

export const Erholung: PokemonAttacke = {
  name: 'Erholung',
  typ: PokemonType.PSYCHIC,
  value: 0,
  specialEffect: erholungEffektFunktion,
};
