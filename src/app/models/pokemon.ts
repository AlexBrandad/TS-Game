import { Xy } from '../app.component';
import { PokemonType } from './pokemon-type';

export class Pokemon {

  private _id: number;
  private _name: string;
  private _lv: number;
  private _lp: number;
  private _xp: number;
  private typen: PokemonType[];
  private attacken: any[];
  private schwaechen: any[];
  private xy: Xy;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
    this._lv = 1;
    this._lp = 10;
    this._xp = 0;
    this.typen = [];
    this.attacken = [];
    this.schwaechen = [];
    this.xy = { x: 0, y: 0 };
  }

  get lv(): number {
    return this._lv;
  }
  get lp(): number {
    return this._lp;
  }

  get xp(): number {
    return this._xp;
  }
  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get xyPosition(): Xy {
    return this.xy;
  }

  bewegen(richtung: Richtung) {
    switch (richtung) {
      case 'oben':
        this.xy.y--;
        break;
      case 'unten':
        this.xy.y++;
        break;
      case 'links':
        this.xy.x--;
        break;
      case 'rechts':
        this.xy.x++;
        break;
    }
  }
  //   Lebenspunkte abziehen
  // Erfahrungspunkte hinzufügen
  // Attacken beibringen
  // Das eine pkmn greift das andere an
}

export type Richtung = 'oben' | 'unten' | 'links' | 'rechts';
