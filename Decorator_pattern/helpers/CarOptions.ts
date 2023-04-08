import { Car } from "./Car";

export abstract class CarOptions extends Car {
  car: Car;

  constructor(car: Car) {
    super(car.model, car.price);
    this.car = car;
  }

  public abstract getPrice(): number;
  public abstract getCarDescription(): string;
}
