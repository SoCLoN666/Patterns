import { Car } from "../Car";
import { CarOptions } from "../CarOptions";

export class PanoramicRoof extends CarOptions {
  constructor(car: Car) {
    super(car);
  }

  public getPrice(): number {
    return this.car.getPrice() + 1500;
  }

  public getCarDescription(): string {
    return `${super.getDescription()} with Panoramic roof`;
  }
}
