var GasOven = /** @class */ (function () {
    function GasOven() {
    }
    GasOven.prototype.turnOn = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    GasOven.prototype.turnOff = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    GasOven.prototype.makeFood = function (cookingMethod, item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now " + cookingMethod + " " + item + " !</p>";
            }, 2000);
            console.log("Now" + cookingMethod + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    };
    GasOven.prototype.Cook = function (cookingMethod, item) {
        this.turnOn();
        this.makeFood(cookingMethod, item);
        this.turnOff();
    };
    return GasOven;
}());
var Stove = /** @class */ (function () {
    function Stove() {
    }
    Stove.prototype.turnOn = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE STOVE IS ON!</p>";
        }, 1000);
        console.log("THE STOVE IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    Stove.prototype.turnOff = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE STOVE IS OFF!</p><hr>";
        }, 3000);
        console.log("THE STOVE IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    Stove.prototype.makeFood = function (cookingMethod, item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now " + cookingMethod + " " + item + " !</p>";
            }, 2000);
            console.log("Now" + cookingMethod + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    };
    Stove.prototype.Cook = function (cookingMethod, item) {
        this.turnOn();
        this.makeFood(cookingMethod, item);
        this.turnOff();
    };
    return Stove;
}());
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
var bakery = new Restaurant("Bakery", new GasOven());
bakery.cookingDevice.Cook("baking up", "some yummie cookies");
var bakery = new Restaurant("Bakery", new Stove());
bakery.cookingDevice.Cook("flipping", "some delish pancakes");
//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
