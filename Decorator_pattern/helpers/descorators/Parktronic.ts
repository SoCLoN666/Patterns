import { Car } from "../Car";
import { CarOptions } from "../CarOptions";

export class Parktronic extends CarOptions {
  constructor(car: Car) {
    super(car);
  }

  public getPrice(): number {
    return this.car.getPrice() + 2000;
  }

  public getCarDescription(): string {
    return `${super.getDescription()} with Parktronic`;
  }
}
