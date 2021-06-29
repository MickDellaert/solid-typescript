export class Car {
    private _fuel: number = 0;
    readonly _MAXIMUM_FUEL_CAPACITY: number

    constructor(fuel: number, MAXIMUM_FUEL_CAPACITY: number) {
        this._fuel = fuel;
        this._MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    get fuel(): number {
        return this._fuel;
    }

    set fuel(value: number) {
        this._fuel = value;
    }

    get MAXIMUM_FUEL_CAPACITY(): number {
        return this.MAXIMUM_FUEL_CAPACITY
    }

    addFuel(fuel: number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
}