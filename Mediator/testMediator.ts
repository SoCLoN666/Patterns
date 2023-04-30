import { Client } from "./helpers/client";
import { Dealer } from "./helpers/dealer";

const bmvDeadler = new Dealer();

const clientJohn = new Client("John", bmvDeadler);
clientJohn.makeOrder("BMW x5", "with Sport regime");
