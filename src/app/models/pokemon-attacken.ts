import {PokemonType} from './pokemon-type';
import {Pokemon} from "./pokemon";
import {PokemonStatus} from "./pokemon-status";

const paralyseEffektFunktion = function paralyseEffekt() {
};

export type PokemonAttacke = {
    name: string;
    typ: PokemonType;
    value: number;
    specialEffect?: (attacker: Pokemon) => void;
};

export function erzeugePokemonAttacke(name: string, typ: PokemonType, value: number, specialEffect?: (attacker: Pokemon) => void): PokemonAttacke {
    return {name, typ, value, specialEffect};
}

const erholungEffektFunktion = function erholungEffekt(attacker: Pokemon) {
    attacker._currentLp = attacker.maxLp;
    attacker._status = PokemonStatus.SLEEPING;
    // pkmn heilt sich + schläft ein
    // woher bekomm ich die information welches pokemon sich heilt
    // funktion hat immer EINGABE AUSGABE!!
};
export const Eisstrahl: PokemonAttacke = {
    name: 'Eisstrahl',
    typ: PokemonType.ICE,
    value: 70,
};

export const Erholung: PokemonAttacke = erzeugePokemonAttacke("Erholung", PokemonType.PSYCHIC, 0, erholungEffektFunktion);
