import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    x: 40,
    y: 30,
  };

  gridColumns: string = `repeat(${this.feld.x}, 96px)`;
  gridRows: string = `repeat(${this.feld.y}, 96px)`;

  // pokemon coord x y
  // feld hat ne achse x y

  // wenn pkmn x=2 y=3
}
