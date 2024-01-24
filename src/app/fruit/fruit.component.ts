import {Component, Input} from '@angular/core';
import {FruitType} from "../models/fruit-type";
import {Fruit} from "../models/fruit";

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.scss'
})
export class FruitComponent {
  @Input() fruit!: Fruit;
}
