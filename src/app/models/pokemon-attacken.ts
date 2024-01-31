import { PokemonType } from './pokemon-type';

export type PokemonAttacke = {
  name: string;
  typ: PokemonType;
  value: number;
};
export const Eisstrahl: PokemonAttacke = {
  name: 'Eisstrahl',
  typ: PokemonType.ICE,
  value: 70,
};
