export class Dog {
    private _name: string;

    set name(value) {
        this._name = value
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'Dog';
    }

    public makeSound(): string {
        return 'woef';
    }
}