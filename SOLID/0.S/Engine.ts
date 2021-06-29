export class Engine {
    private _engineStatus: boolean = false;
    private _FUEL_MILAGE: number = 10;

    constructor(engineStatus: boolean, FUEL_MILAGE) {
        this._engineStatus = engineStatus;
        this._FUEL_MILAGE = FUEL_MILAGE;
    }

    get status(): boolean {
        return this._engineStatus;
    }

    turnEngineOn() {
        this._engineStatus = true;
    }

    turnEngineOff() {
        this._engineStatus = false;
    }

}