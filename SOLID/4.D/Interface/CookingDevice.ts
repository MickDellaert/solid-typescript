export interface CookingDevice {
    turnOn() : void;
    turnOff() : void;
    makeFood(cookingMethod : string, item : string);
    Cook(cookingMethod : string, item : string);
}
