import { Car } from "./Decorator/helpers/Car";

export class Tesla extends Car {
  public model = "Model 3";

  public getPrice(): number {
    return 30000;
  }
}
