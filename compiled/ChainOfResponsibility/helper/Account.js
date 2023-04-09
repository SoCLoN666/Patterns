"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(balance, name) {
        this.balance = balance;
        this.name = name;
    }
    Account.prototype.pay = function (priceOfOrder) {
        var paymentStatus = this.performPayment(priceOfOrder);
        this.notEnough(paymentStatus);
    };
    Account.prototype.performPayment = function (priceOfOrder) {
        if (this.makePayment(priceOfOrder)) {
            return true;
        }
        if (this.payWithIncommerCard(priceOfOrder)) {
            return true;
        }
    };
    Account.prototype.makePayment = function (priceOfOrder) {
        if (this.canPay(priceOfOrder)) {
            console.log("Paid ".concat(priceOfOrder, " using ").concat(this.name));
            return true;
        }
    };
    Account.prototype.payWithIncommerCard = function (priceOfOrder) {
        if (this.incommer) {
            console.log("Cannot pay using ".concat(this.name));
            this.incommer.pay(priceOfOrder);
            return true;
        }
    };
    Account.prototype.notEnough = function (paid) {
        if (typeof paid !== "boolean") {
            console.log("Not enough money");
        }
    };
    Account.prototype.canPay = function (ammount) {
        return this.balance >= ammount;
    };
    Account.prototype.setIncommer = function (account) {
        this.incommer = account;
    };
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=Account.js.map