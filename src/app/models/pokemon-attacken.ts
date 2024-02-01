import {PokemonType} from './pokemon-type';
import {Pokemon} from "./pokemon";
import {PokemonStatus} from "./pokemon-status";


export type PokemonAttacke = {
    name: string;
    typ: PokemonType;
    value: number;
    specialEffect?: (attacker: Pokemon, defender?: Pokemon, chanceToInflictStatus?: number) => void;
};
const paralyseEffektFunktion = function paralyseEffekt() {
};
const chanceToInflictStatusEffectFunktion = function inflictStatusEffect(defender: Pokemon, chanceToInflictStatus: number) {
}
const erholungEffektFunktion = function erholungEffekt(attacker: Pokemon) {
    attacker._currentLp = attacker.maxLp;
    attacker._status = PokemonStatus.SLEEPING;
};

const attackWithSelfDamage = function attackWithSelfDamageEffect(value: number) {
    return (attacker: Pokemon, defender?: Pokemon) => {
        attacker._currentLp -= Math.floor(0.25 * value);
        if (defender) {
            defender._currentLp -= value;
        }
    };
}

function testFunction(value: number) {


}

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

export const Bodycheck: PokemonAttacke = {
    name: "Bodycheck",
    typ: PokemonType.NORMAL,
    value: 90,
    specialEffect: attackWithSelfDamage(90)
}
//1. Attacken noch: Bodycheck(Rayquaza dmg + selfdmg) + Schutzschild (Dragoran)
// 1.1 ConsoleLogs die dem Spiel ähneln: "{{Attacker}}" führt {{Attacke}} aus! etc.
//2. Spieloberfläche muss die Attacken anzeigen können (muss aus Pokemon laden) wenn ich hilfe brauch gibts pseudocode

