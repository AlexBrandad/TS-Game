import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  @Input({ required: true }) pkmn!: Pokemon;
}
