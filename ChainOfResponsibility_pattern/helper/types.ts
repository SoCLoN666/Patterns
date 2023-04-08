import { MasterCard } from "../paySystems/MasterCard";
import { PayPal } from "../paySystems/PayPal";
import { Qiwi } from "../paySystems/Qiwi";

export type AccountTypes = MasterCard | PayPal | Qiwi;
