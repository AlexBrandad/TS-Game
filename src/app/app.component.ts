import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './models/pokemon';
import { PokemonComponent } from './pokemon/pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, PokemonComponent],
})
export class AppComponent {
  rayquaza = new Pokemon(384, 'Rayquaza');

  feld = {
    x: 12,
    y: 10,
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
    if (positionOfPokemon.x === currentField.x && positionOfPokemon.y === currentField.y) {
      return true;
    } else {
      return false;
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'w') {
      this.rayquaza.bewegen('oben');
    } else if (event.key === 's') {
      this.rayquaza.bewegen('unten');
    } else if (event.key === 'a') {
      this.rayquaza.bewegen('links');
    } else if (event.key === 'd') {
      this.rayquaza.bewegen('rechts');
    } else {
      console.log('Key pressed: ' + event.key);
    }
  }
}

export type Xy = {
  x: number;
  y: number;
};
