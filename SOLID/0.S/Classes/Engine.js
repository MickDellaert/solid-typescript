"use strict";
exports.__esModule = true;
exports.Engine = void 0;
var Engine = /** @class */ (function () {
    function Engine(FUEL_MILEAGE) {
        this._status = false;
        this.FUEL_MILEAGE = 10;
        this.FUEL_MILEAGE = FUEL_MILEAGE;
    }
    Object.defineProperty(Engine.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "mileage", {
        get: function () {
            return this.FUEL_MILEAGE;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.turnEngineOn = function () {
        this._status = true;
    };
    Engine.prototype.turnEngineOff = function () {
        this._status = false;
    };
    return Engine;
}());
exports.Engine = Engine;
