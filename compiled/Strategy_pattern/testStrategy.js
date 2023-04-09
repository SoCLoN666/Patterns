"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookStore_1 = require("./context/BookStore");
var base_strategies_1 = require("./strategies/base-strategies");
var golden_strategy_1 = require("./strategies/golden-strategy");
var platimum_strategy_1 = require("./strategies/platimum-strategy");
var premium_strategy_1 = require("./strategies/premium-strategy");
// all strategies:
var baseStrategy = new base_strategies_1.BaseStrategy();
var goldenStrategy = new golden_strategy_1.GoldenStrategy();
var premiumStrategy = new premium_strategy_1.PremiumStrategy();
var platinumStrategy = new platimum_strategy_1.PlatinumStrategy();
var firstYearCustomer = new BookStore_1.BookStoreCustomer(baseStrategy);
var thirdYearCustomer = new BookStore_1.BookStoreCustomer(goldenStrategy);
var fifthYearCustomer = new BookStore_1.BookStoreCustomer(premiumStrategy);
var tenthYearCustomer = new BookStore_1.BookStoreCustomer(platinumStrategy);
console.log(firstYearCustomer.checkout(270));
console.log(thirdYearCustomer.checkout(290));
console.log(fifthYearCustomer.checkout(240));
console.log(tenthYearCustomer.checkout(320));
//# sourceMappingURL=testStrategy.js.map