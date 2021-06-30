export class Cat {
    private _name: string;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'Cat';
    }

    public makeSound(): string {
        return 'miauw';
    }
}