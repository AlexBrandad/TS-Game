import { PokemonType } from './pokemon-type';
type Multiplikator = 0 | 1 | 0.5 | 2;

export function getMultiplikator(
  AttackTyp: PokemonType,
  DefendTyp: PokemonType
): Multiplikator {
  switch (AttackTyp) {
    case PokemonType.ROCK:
      switch (DefendTyp) {
        case PokemonType.FIRE:
        case PokemonType.BUG:
        case PokemonType.ICE:
        case PokemonType.ROCK:
          return 2;
        case PokemonType.FIGHTING:
        case PokemonType.STEEL:
        case PokemonType.GROUND:
          return 0.5;
        default:
          return 1;
      }
    case PokemonType.ICE:
      switch (DefendTyp) {
        case PokemonType.FLYING:
        case PokemonType.DRAGON:
        case PokemonType.GRASS:
        case PokemonType.GROUND:
          return 2;
        case PokemonType.ICE:
        case PokemonType.WATER:
        case PokemonType.FIRE:
        case PokemonType.STEEL:
          return 0.5;
        default:
          return 1;
      }
    case PokemonType.STEEL:
      switch (DefendTyp) {
        case PokemonType.ICE:
        case PokemonType.ROCK:
          return 2;
        case PokemonType.ELECTRIC:
        case PokemonType.FIRE:
        case PokemonType.WATER:
        case PokemonType.STEEL:
          return 0.5;
        default:
          return 1;
      }
    case PokemonType.FLYING:
      switch (DefendTyp) {
        case PokemonType.GRASS:
        case PokemonType.BUG:
        case PokemonType.FIGHTING:
          return 2;
        case PokemonType.ELECTRIC:
        case PokemonType.ROCK:
        case PokemonType.STEEL:
          return 0.5;
        default:
          return 1;
      }
    case PokemonType.GROUND:
      switch (DefendTyp) {
        case PokemonType.ELECTRIC:
        case PokemonType.FIRE:
        case PokemonType.POISON:
        case PokemonType.ROCK:
        case PokemonType.STEEL:
          return 2;
        case PokemonType.GRASS:
        case PokemonType.BUG:
          return 0.5;
        case PokemonType.FLYING:
          return 0;
        default:
          return 1;
      }
    case PokemonType.NORMAL:
      switch (DefendTyp) {
        case PokemonType.ROCK:
        case PokemonType.STEEL:
          return 0.5;
        case PokemonType.GHOST:
          return 0;
        default:
          return 1;
      }
    case PokemonType.GRASS:
      switch (DefendTyp) {
        case PokemonType.WATER:
        case PokemonType.ROCK:
        case PokemonType.GROUND:
          return 2;
        case PokemonType.GRASS:
        case PokemonType.FIRE:
        case PokemonType.BUG:
        case PokemonType.DRAGON:
        case PokemonType.POISON:
        case PokemonType.STEEL:
        case PokemonType.FLYING:
          return 0.5;
        default:
          return 1;
      }
    case PokemonType.ELECTRIC:
      switch (DefendTyp) {
        case PokemonType.WATER:
        case PokemonType.FLYING:
          return 2;
        case PokemonType.GROUND:
          return 0;
        case PokemonType.GRASS:
        case PokemonType.ELECTRIC:
        case PokemonType.DRAGON:
          return 0.5;
        default:
          return 1;
      }
    case PokemonType.FIRE:
      switch (DefendTyp) {
        case PokemonType.GRASS:
        case PokemonType.STEEL:
        case PokemonType.BUG:
        case PokemonType.ICE:
          return 2;
        case PokemonType.FIRE:
        case PokemonType.DRAGON:
        case PokemonType.WATER:
        case PokemonType.ROCK:
          return 0.5;
        default:
          return 1;
      }
    case PokemonType.BUG:
      switch (DefendTyp) {
        case PokemonType.GRASS:
        case PokemonType.PSYCHIC:
        case PokemonType.DARK:
          return 2;
        case PokemonType.FIRE:
        case PokemonType.GHOST:
        case PokemonType.POISON:
        case PokemonType.FIGHTING:
        case PokemonType.STEEL:
        case PokemonType.FLYING:
          return 0.5;
        default:
          return 1;
      }
    case PokemonType.GHOST:
      switch (DefendTyp) {
        case PokemonType.GHOST:
        case PokemonType.PSYCHIC:
          return 2;
        case PokemonType.DARK:
        case PokemonType.STEEL:
          return 0.5;
        case PokemonType.NORMAL:
          return 0;
        default:
          return 1;
      }
    case PokemonType.DRAGON:
      switch (DefendTyp) {
        case PokemonType.DRAGON:
          return 2;
        case PokemonType.STEEL:
          return 0.5;
        default:
          return 1;
      }
    case PokemonType.POISON:
      switch (DefendTyp) {
        case PokemonType.GRASS:
          return 2;
        case PokemonType.GHOST:
        case PokemonType.POISON:
        case PokemonType.ROCK:
        case PokemonType.GROUND:
          return 0.5;
        case PokemonType.STEEL:
          return 0;
        default:
          return 1;
      }
    case PokemonType.PSYCHIC:
      switch (DefendTyp) {
        case PokemonType.POISON:
        case PokemonType.FIGHTING:
          return 2;
        case PokemonType.PSYCHIC:
        case PokemonType.STEEL:
          return 0.5;
        case PokemonType.DARK:
          return 0;
        default:
          return 1;
      }
    case PokemonType.WATER:
      switch (DefendTyp) {
        case PokemonType.GROUND:
        case PokemonType.ROCK:
        case PokemonType.FIRE:
          return 2;
        case PokemonType.GRASS:
        case PokemonType.DRAGON:
        case PokemonType.WATER:
          return 0.5;
        default:
          return 1;
      }
    case PokemonType.FIGHTING:
      switch (DefendTyp) {
        case PokemonType.NORMAL:
        case PokemonType.STEEL:
        case PokemonType.ROCK:
        case PokemonType.ICE:
        case PokemonType.DARK:
          return 2;
        case PokemonType.GHOST:
          return 0;
        case PokemonType.BUG:
        case PokemonType.PSYCHIC:
        case PokemonType.POISON:
          return 0.5;
        default:
          return 1;
      }
    case PokemonType.DARK:
      switch (DefendTyp) {
        case PokemonType.GHOST:
        case PokemonType.PSYCHIC:
          return 2;
        case PokemonType.FIGHTING:
        case PokemonType.DARK:
        case PokemonType.STEEL:
          return 0.5;
        default:
          return 1;
      }
    default:
      return 1;
  }
}
