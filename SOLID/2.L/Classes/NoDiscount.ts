import {Discount} from "./Discount";

export class NoDiscount implements Discount {
    _value: number;

    constructor(value: number = 0) {
        this._value = value;

        // if (value <= 0) {
        //     throw new Error('You cannot create a discount with a negative value');
        // }
    }

    apply(price: number): number {
        return price;
    }

    showCalculation(price: number): string {
        return "No discount";
    }
}