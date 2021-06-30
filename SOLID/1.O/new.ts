import {Dog} from "./Classes/Dog";
import {Cat} from "./Classes/Cat";
import {Parrot} from "./Classes/Parrot";
import {Squirrel} from "./Classes/Squirrel";
import {Zoo} from "./Classes/Zoo";

let zoo = new Zoo;
zoo.addAnimal(new Dog);
zoo.addAnimal(new Cat);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Squirrel);

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += `${animal.type}: ${animal.makeSound()} <br>`;
});