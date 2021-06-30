export class Squirrel {
    private _name: string;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'Squirrel';
    }

    public makeSound(): string {
        return 'squeak';
    }
}