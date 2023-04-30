import { Client } from "./client";

export class Dealer {
  customerList = [];

  public orderAutoAndSaveCustomerInfo(
    client: Client,
    auto: string,
    info: string
  ) {
    const customerName = client.getName();
    console.log(`customer: ${customerName} made and order`);
    console.log(`order is ${auto} with: ${info}`);
    this.addCustomerToList(customerName);
  }

  private addCustomerToList(name: string) {
    this.customerList.push(name);
  }

  public getCustomerList() {
    return this.customerList;
  }
}
