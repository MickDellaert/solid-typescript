"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GasOven_1 = require("./Classes/GasOven");
var Stove_1 = require("./Classes/Stove");
var Restaurant_1 = require("./Classes/Restaurant");
var bakery = new Restaurant_1.Restaurant("Bakery", new GasOven_1.GasOven());
bakery.cookingDevice.Cook("baking up", "some yummie cookies");
var crepery = new Restaurant_1.Restaurant("Crepery", new Stove_1.Stove());
crepery.cookingDevice.Cook("flipping", "some delish pancakes");
//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
