import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './models/pokemon';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FruitComponent } from './fruit/fruit.component';
import { Fruit } from './models/fruit';
import { FruitType } from './models/fruit-type';
import { Eisstrahl, PokemonAttacke } from './models/pokemon-attacken';
import { PokemonType } from './models/pokemon-type';
import { getMultiplikator } from './models/type-multiplikator';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, PokemonComponent, FruitComponent],
})
export class AppComponent {
  rayquaza = new Pokemon(
    384,
    'Rayquaza',
    [PokemonType.DRAGON, PokemonType.FLYING],
    [PokemonType.ICE, PokemonType.DRAGON]
  );
  dragoran = new Pokemon(
    148,
    'Dragoran',
    [PokemonType.DRAGON, PokemonType.FLYING],
    [PokemonType.ICE, PokemonType.DRAGON]
  );
  healthBerry = new Fruit(FruitType.Health);

  feld = {
    x: 4,
    y: 3,
  };

  fieldArray: Xy[] = [];

  constructor() {
    for (let i = 0; i < this.feld.y; i++) {
      for (let j = 0; j < this.feld.x; j++) {
        this.fieldArray.push({ x: j, y: i });
      }
    }
  }

  gridColumns: string = `repeat(${this.feld.x}, 96px)`;
  gridRows: string = `repeat(${this.feld.y}, 96px)`;

  pkmnOnField(positionOfPokemon: Xy, currentField: Xy): boolean {
    return (
      positionOfPokemon.x === currentField.x &&
      positionOfPokemon.y === currentField.y
    );
  }

  objectOnField(positionOfObject: Xy, currentField: Xy): boolean {
    return (
      positionOfObject.x === currentField.x &&
      positionOfObject.y === currentField.y
    );
  }

  objectCollision(positionOfObject: Xy, positionOfPokemon: Xy): boolean {
    if (
      positionOfPokemon.x == positionOfObject.x &&
      positionOfPokemon.y == positionOfObject.y
    ) {
      this.healthBerry.xy = { x: -1, y: -1 };
      return true;
    } else return false;
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'w' && this.rayquaza.xyPosition.y > 0) {
      this.rayquaza.bewegen('oben');
    } else if (
      event.key === 's' &&
      this.rayquaza.xyPosition.y < this.feld.y - 1
    ) {
      this.rayquaza.bewegen('unten');
    } else if (event.key === 'a' && this.rayquaza.xyPosition.x > 0) {
      this.rayquaza.bewegen('links');
    } else if (
      event.key === 'd' &&
      this.rayquaza.xyPosition.x < this.feld.x - 1
    ) {
      this.rayquaza.bewegen('rechts');
    } else {
    }
  }

  gainXP(points: number) {
    this.rayquaza.gainXpAndLevelUp(points);
  }

  gainLP(points: number) {
    this.rayquaza.gainLp(points);
  }

  removeLP(points: number) {
    this.rayquaza.removeLp(points);
  }
  angreifen(attacker: Pokemon, defender: Pokemon, attacke: PokemonAttacke) {
    let multiplikatorSumme = 1;
    for (const defendTyp of defender._typen) {
      const multiplikator = getMultiplikator(attacke.typ, defendTyp);
      multiplikatorSumme *= multiplikator;
    }
    const attackValue = attacke.value * multiplikatorSumme;
    return attackValue;
  }
  // Ich iteriere die schwächen, pro iteration wird die fnkt getMultiplikator aufgerufen
  // pro iteration wird der multiplikator (return value der funktion addiert)
  // und am ende hat man dann attack.value * Multiplikator
  eisStrahl(): number {
    return this.angreifen(this.dragoran, this.rayquaza, Eisstrahl);
  }
}

export type Xy = {
  x: number;
  y: number;
};
