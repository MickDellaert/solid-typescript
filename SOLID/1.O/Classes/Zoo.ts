export class Zoo {
    private _animals: Array<Object> = [];

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }
}