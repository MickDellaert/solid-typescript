export class Engine {
    private _status: boolean = false;
    readonly FUEL_MILEAGE: number = 10;

    constructor(status: boolean, FUEL_MILEAGE: number) {
        this._status = status;
        this.FUEL_MILEAGE = FUEL_MILEAGE;
    }

    get status(): boolean {
        return this._status;
    }

    get mileage(): number {
        return this.FUEL_MILEAGE;
    }

    turnEngineOn() {
        this._status = true;
    }

    turnEngineOff() {
        this._status = false;
    }

}