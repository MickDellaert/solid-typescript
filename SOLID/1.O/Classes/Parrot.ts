export class Parrot {
    private _name: string;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'Parrot';
    }

    public makeSound(): string {
        return 'I am a pirate';
    }
}