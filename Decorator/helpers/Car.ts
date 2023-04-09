export abstract class Car {
  public model: string;
  public price: number;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  public getDescription() {
    return this.model;
  }

  abstract getPrice(): number;
}
