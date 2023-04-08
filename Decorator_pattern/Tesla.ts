import { Car } from "./helpers/Car";

export class Tesla extends Car {
  public model: string;
  public price: number;

  constructor(model: string, price: number) {
    super(model, price);
  }

  public getPrice() {
    return this.price;
  }
}
