import { CookingDevice} from "../Interface/CookingDevice";

export class Restaurant {

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
