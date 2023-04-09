import { Account } from "../helper/Account";

export class PayPal extends Account {
  name = "PayPal";
  balance: number;

  constructor(balance: number) {
    super(balance, "PayPal");
    this.balance = balance;
  }
}
