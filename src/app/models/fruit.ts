import {Xy} from "../app.component";
import {FruitType} from "./fruit-type";

export class Fruit {
    private _xy: Xy;
    private type: FruitType;


    constructor(type:FruitType) {
        this._xy = { x: 1, y: 1 };
        this.type = FruitType.Health;
    }
    get xyPosition(): Xy {
        return this._xy;
    }

    set xy(value: Xy) {
        this._xy = value;
    }

}
