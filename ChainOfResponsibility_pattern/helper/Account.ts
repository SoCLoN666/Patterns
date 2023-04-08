import { MasterCard } from "../paySystems/MasterCard";
import { PayPal } from "../paySystems/PayPal";
import { AccountTypes } from "./types";

export class Account {
  balance: number;
  incommer: AccountTypes;
  name: string;

  constructor(balance: number, name: string) {
    this.balance = balance;
    this.name = name;
  }

  pay(priceOfOrder: number) {
    const paymentStatus = this.performPayment(priceOfOrder);

    this.notEnough(paymentStatus);
  }

  private performPayment(priceOfOrder: number): boolean {
    if (this.makePayment(priceOfOrder)) {
      return true;
    }

    if (this.payWithIncommerCard(priceOfOrder)) {
      return true;
    }
  }

  makePayment(priceOfOrder: number): boolean | undefined {
    if (this.canPay(priceOfOrder)) {
      console.log(`Paid ${priceOfOrder} using ${this.name}`);

      return true;
    }
  }

  payWithIncommerCard(priceOfOrder: number): boolean | undefined {
    if (this.incommer) {
      console.log(`Cannot pay using ${this.name}`);
      this.incommer.pay(priceOfOrder);

      return true;
    }
  }

  notEnough(paid: boolean | undefined) {
    if (typeof paid !== "boolean") {
      console.log("Not enough money");
    }
  }

  canPay(ammount: number) {
    return this.balance >= ammount;
  }

  setIncommer(account: AccountTypes) {
    this.incommer = account;
  }
}
