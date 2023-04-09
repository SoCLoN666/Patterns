import { BookStoreCustomer } from "./context/BookStoreCustomer";
import { BaseStrategy } from "./strategies/base-strategies";
import { GoldenStrategy } from "./strategies/golden-strategy";
import { PlatinumStrategy } from "./strategies/platimum-strategy";
import { PremiumStrategy } from "./strategies/premium-strategy";

// all strategies:
const baseStrategy = new BaseStrategy();
const goldenStrategy = new GoldenStrategy();
const premiumStrategy = new PremiumStrategy();
const platinumStrategy = new PlatinumStrategy();

const firstYearCustomer = new BookStoreCustomer(baseStrategy);
const thirdYearCustomer = new BookStoreCustomer(goldenStrategy);
const fifthYearCustomer = new BookStoreCustomer(premiumStrategy);
const tenthYearCustomer = new BookStoreCustomer(platinumStrategy);

console.log(firstYearCustomer.checkout(270));
console.log(thirdYearCustomer.checkout(290));
console.log(fifthYearCustomer.checkout(240));
console.log(tenthYearCustomer.checkout(320));
