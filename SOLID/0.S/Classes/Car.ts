import {Engine} from "./Engine";

export class Car {
    private _fuel: number = 0;
    readonly MAXIMUM_FUEL_CAPACITY: number
    private _miles: number = 0;
    private _engine: Engine;

    constructor(MAXIMUM_FUEL_CAPACITY: number, engine: Engine) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._engine = engine;
    }

    get fuel(): number {
        return this._fuel;
    }

    set fuel(value: number) {
        this._fuel = value;
    }

    get miles(): number {
        return this._miles;
    }

    addFuel(fuel: number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    drive() {
        if (this._engine.status === false || this._fuel <= 0) {
            return;
        }
        this._fuel -= 1;
        this._miles += this._engine.mileage;
    }
}