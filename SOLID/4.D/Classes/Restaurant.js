"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant(name, cookingDevice) {
        this._name = name;
        this._cookingDevice = cookingDevice;
    }
    Object.defineProperty(Restaurant.prototype, "cookingDevice", {
        get: function () {
            return this._cookingDevice;
        },
        enumerable: false,
        configurable: true
    });
    return Restaurant;
}());
exports.Restaurant = Restaurant;
