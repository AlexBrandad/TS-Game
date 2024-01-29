import { PokemonType } from './pokemon-type';
type Multiplikator = 0 | 1 | 0.5 | 2;

export function getMultiplikator(
  AttackTyp: PokemonType,
  DefendTyp: PokemonType
): Multiplikator {
  if (AttackTyp === PokemonType.ICE) {
    if (DefendTyp === PokemonType.FLYING) {
      return 2;
    }
    if (DefendTyp === PokemonType.DRAGON) {
      return 2;
    }
    if (DefendTyp === PokemonType.FIRE) {
      return 0.5;
    }
    if (DefendTyp === PokemonType.PSYCHIC) {
      return 1;
    }
  }
  return 1;
}
