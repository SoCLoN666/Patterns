import { Dealer } from "./dealer";

export class Client {
  name: string;
  carDealer: Dealer;

  constructor(name: string, carDealer: Dealer) {
    this.name = name;
    this.carDealer = carDealer;
  }

  public getName() {
    return this.name;
  }

  public makeOrder(autoModel: string, autoInfo: string) {
    this.carDealer.orderAutoAndSaveCustomerInfo(this, autoModel, autoInfo);
  }
}
