import {PokemonType} from './pokemon-type';
import {Pokemon} from "./pokemon";
import {PokemonStatus} from "./pokemon-status";

const paralyseEffektFunktion = function paralyseEffekt() {
};

export type PokemonAttacke = {
    name: string;
    typ: PokemonType;
    value: number;
    specialEffect?: (attacker: Pokemon, defender?: Pokemon, chanceToInflictStatus?: number) => void;
};

const chanceToInflictStatusEffectFunktion = function inflictStatusEffect(defender: Pokemon, chanceToInflictStatus: number) {
}
const erholungEffektFunktion = function erholungEffekt(attacker: Pokemon) {
    attacker._currentLp = attacker.maxLp;
    attacker._status = PokemonStatus.SLEEPING;
};
export const Eisstrahl: PokemonAttacke = {
    name: 'Eisstrahl',
    typ: PokemonType.ICE,
    value: 70,
};

export const Erholung: PokemonAttacke = {
    name: "Erholung",
    typ: PokemonType.PSYCHIC,
    value: 0,
    specialEffect: erholungEffektFunktion
}

//1. Attacken noch: Bodycheck(Rayquaza dmg + selfdmg) + Schutzschild (Dragoran)
//2. Spieloberfläche muss die Attacken anzeigen können (muss aus Pokemon laden) wenn ich hilfe brauch gibts pseudocode

