import { PokemonType } from './pokemon-type';

export class Pokemon {
  private _id: number;
  private _name: string;
  private lv: number;
  private lp: number;
  private xp: number;
  private typen: PokemonType[];
  private attacken: any[];
  private schwaechen: any[];

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
    this.lv = 1;
    this.lp = 10;
    this.xp = 0;
    this.typen = [];
    this.attacken = [];
    this.schwaechen = [];
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
  //   Lebenspunkte abziehen
  // Erfahrungspunkte hinzufügen
  // Attacken beibringen
  // Das eine pkmn greift das andere an
}
