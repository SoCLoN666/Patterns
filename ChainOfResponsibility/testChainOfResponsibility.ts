import { MasterCard } from "./paySystems/MasterCard";
import { PayPal } from "./paySystems/PayPal";
import { Qiwi } from "./paySystems/Qiwi";

const masterCard = new MasterCard(500);
const payPal = new PayPal(1200);
const qiwi = new Qiwi(200);

masterCard.setIncommer(payPal);
payPal.setIncommer(qiwi);

masterCard.pay(1000);
