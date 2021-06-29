export class Engine {
    private _engineStatus: boolean = false;

    constructor(_engineStatus: boolean) {
        this._engineStatus = _engineStatus;
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