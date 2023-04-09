import { Account } from "../helper/Account";

export class Qiwi extends Account {
  name = "Qiwi";
  balance: number;

  constructor(balance: number) {
    super(balance, "Qiwi");
    this.balance = balance;
  }
}
