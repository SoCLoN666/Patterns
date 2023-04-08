import { Account } from "../helper/Account";

export class MasterCard extends Account {
  name = "MasterCard";
  balance: number;

  constructor(balance: number) {
    super(balance, "MasterCard");
    this.balance = balance;
  }
}
