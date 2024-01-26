import { Component, Input } from '@angular/core';
import { Fruit } from '../models/fruit';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.scss',
})
export class FruitComponent {
  @Input() fruit!: Fruit;
}
