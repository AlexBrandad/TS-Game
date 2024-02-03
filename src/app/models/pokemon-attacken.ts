import {PokemonType} from './pokemon-type';
import {Pokemon} from "./pokemon";
import {PokemonStatus} from "./pokemon-status";


export type PokemonAttacke = {
    name: string;
    typ: PokemonType;
    value: number;
    specialEffect?: (attacker: Pokemon, defender: Pokemon, chanceToInflictStatus?: number) => void;
};

const chanceToInflictStatusEffectFunktion = function inflictStatusEffect(chanceToInflictStatus: number, status: PokemonStatus) {
    return (attacker: Pokemon, defender: Pokemon): void => {
        if (Math.random() < chanceToInflictStatus) {
            console.log(defender.name + " ist jetzt " + status);
            defender!._status = status;
        }
    }


}
const erholungEffektFunktion = function erholungEffekt(attacker: Pokemon) {
    attacker._currentLp = attacker.maxLp;
    attacker._status = PokemonStatus.SLEEPING;
};

const attackWithSelfDamage = function attackWithSelfDamageEffect(value: number) {
    return (attacker: Pokemon, defender: Pokemon) => {
        attacker._currentLp -= Math.floor(0.25 * value);
        if (defender) {
            console.log("Bodycheck Defender Case");
        }
    };
}

const schutzschildEffekt = function schutzschildFunction(attacker: Pokemon) {
    console.log(attacker.name + " schützt sich selbst.");
    attacker._status = PokemonStatus.SHIELDED;
}

function testFunction(value: number) {


}

export const Eisstrahl: PokemonAttacke = {
    name: 'Eisstrahl',
    typ: PokemonType.ICE,
    value: 70,
    specialEffect: chanceToInflictStatusEffectFunktion(0.2, PokemonStatus.FROZEN)
};

export const Erholung: PokemonAttacke = {
    name: "Erholung",
    typ: PokemonType.PSYCHIC,
    value: 0,
    specialEffect: erholungEffektFunktion
}

export const Bodycheck: PokemonAttacke = {
    name: "Bodycheck",
    typ: PokemonType.NORMAL,
    value: 90,
    specialEffect: attackWithSelfDamage(90)
}

export const Schutzschild: PokemonAttacke = {
    name: "Schutzschild",
    typ: PokemonType.NORMAL,
    value: 0,
    specialEffect: schutzschildEffekt,
}

//2. Spieloberfläche muss die Attacken anzeigen können (muss aus Pokemon laden) wenn ich hilfe brauch gibts pseudocode

