import {GasOven} from "./Classes/GasOven";
import {Stove} from "./Classes/Stove";
import {Restaurant} from "./Classes/Restaurant";


let bakery = new Restaurant("Bakery", new GasOven());
bakery.cookingDevice.Cook("baking up", "some yummie cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.cookingDevice.Cook("flipping", "some delish pancakes");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
