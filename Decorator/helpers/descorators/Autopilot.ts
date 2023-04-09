import { Car } from "../Car";
import { CarOptions } from "../CarOptions";

export class Autopilot extends CarOptions {
  constructor(car: Car) {
    super(car);
  }

  public getPrice(): number {
    return this.car.getPrice() + 5000;
  }

  public getCarDescription(): string {
    return `${super.getDescription()} with Autopilot`;
  }
}
