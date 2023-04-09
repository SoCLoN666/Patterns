import { Strategy } from "../helpers/strategy";

export class BookStoreCustomer {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public checkout(bookPrice: number) {
    return this.strategy.buyABook(bookPrice);
  }
}
