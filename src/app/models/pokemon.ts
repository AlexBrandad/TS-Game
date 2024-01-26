import { Xy } from '../app.component';
import { PokemonStatus } from './pokemon-status';
import { PokemonType } from './pokemon-type';

export class Pokemon {
  private _id: number;
  private _name: string;
  public _currentLv: number;
  public _currentLp: number;
  public _currentXp: number;
  private _maxLv: number;
  public _maxLp: number;
  private _xp: number;
  private typen: PokemonType[];
  private attacken: any[];
  private schwaechen: any[];
  private xy: Xy;
  private status: PokemonStatus;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
    this._maxLv = 100;
    this._maxLp = 10;
    this._xp = 10;
    this.typen = [];
    this.attacken = [];
    this.schwaechen = [];
    this.xy = { x: 0, y: 0 };
    this._currentLp = this._maxLp;
    this._currentLv = 1;
    this._currentXp = 0;
    this.status = PokemonStatus.normal;
  }

  get maxLv(): number {
    return this._maxLv;
  }

  get maxLp(): number {
    return this._maxLp;
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

  set xp(value: number) {
    if (this.currentLv >= this.maxLv) {
      this._xp = 0;
    } else {
      this._xp = value;
    }
  }

  set maxLp(value: number) {
    this._maxLp = value;
  }

  get currentLv(): number {
    return this._currentLv;
  }

  set currentLv(value: number) {
    this._currentLv = value;
  }

  get currentLp(): number {
    return this._currentLp;
  }

  set currentLp(value: number) {
    this._currentLp = value;
  }

  get currentXp(): number {
    return this._currentXp;
  }

  set currentXp(value: number) {
    if (this._currentLv < this.maxLv) {
      this._currentXp = value;
    } else {
      this._currentXp = 0;
      this.xp = 0;
    }
  }

  set maxLv(value: number) {
    this._maxLv = value;
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

  gainXpAndLevelUp(points: number) {
    if (this.currentXp < this.xp) {
      this.currentXp += points;
      while (this.currentXp >= this.xp && this.currentLv < this.maxLv) {
        this.currentLv += 1;
        this.maxLp += 17;
        this.currentLp = this.maxLp;
        this.currentXp -= this.xp;
        this.xp += 15;
      }
    }
  }

  gainLp(points: number) {
    if (this._currentLp <= this.maxLp) {
      this._currentLp += points;
    }
  }

  // Attacken beibringen
  // Das eine pkmn greift das andere an
}

export type Richtung = 'oben' | 'unten' | 'links' | 'rechts';
