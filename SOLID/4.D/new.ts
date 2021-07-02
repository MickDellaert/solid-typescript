interface CookingDevice {
    turnOn() : void;
    turnOff() : void;
    makeFood(cookingMethod : string, item : string);
    Cook(cookingMethod : string, item : string);
}


class GasOven implements CookingDevice {
    private _isOn : boolean;

    public turnOn() : void
    {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOff() : void
    {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    public makeFood(cookingMethod: string, item : string)
    {
        if(this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now " + cookingMethod + " " + item + " !</p>";
            }, 2000);
            console.log("Now" + cookingMethod + item + "!");
        }
        else
        {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }

    public Cook(cookingMethod: string, item : string) {
        this.turnOn();
        this.makeFood(cookingMethod, item);
        this.turnOff();
    }
}

class Stove implements CookingDevice {
    private _isOn : boolean;

    public turnOn() : void
    {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE STOVE IS ON!</p>";
        }, 1000);
        console.log("THE STOVE IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOff() : void
    {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE STOVE IS OFF!</p><hr>";
        }, 3000);
        console.log("THE STOVE IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    public makeFood(cookingMethod: string, item : string)
    {
        if(this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now " + cookingMethod + " " + item + " !</p>";
            }, 2000);
            console.log("Now" + cookingMethod + item + "!");
        }
        else
        {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }

    public Cook(cookingMethod: string, item : string) {
        this.turnOn();
        this.makeFood(cookingMethod, item);
        this.turnOff();
    }
}

class Restaurant {

    private _name : string;
    readonly _cookingDevice : CookingDevice;

    constructor(name : string, cookingDevice ? : CookingDevice) {
        this._name = name;
        this._cookingDevice = cookingDevice;
    }

    get cookingDevice(): CookingDevice {
        return this._cookingDevice;
    }
}


let bakery = new Restaurant("Bakery", new GasOven());
bakery.cookingDevice.Cook("baking up", "some yummie cookies");

let bakery = new Restaurant("Bakery", new Stove());
bakery.cookingDevice.Cook("flipping", "some delish pancakes");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
