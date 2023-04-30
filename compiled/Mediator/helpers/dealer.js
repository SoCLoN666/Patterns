"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = void 0;
var Dealer = /** @class */ (function () {
    function Dealer() {
        this.customerList = [];
    }
    Dealer.prototype.orderAutoAndSaveCustomerInfo = function (client, auto, info) {
        var customerName = client.getName();
        console.log("customer: ".concat(customerName, " made and order"));
        console.log("order is ".concat(auto, " with: ").concat(info));
        this.addCustomerToList(customerName);
    };
    Dealer.prototype.addCustomerToList = function (name) {
        this.customerList.push(name);
    };
    Dealer.prototype.getCustomerList = function () {
        return this.customerList;
    };
    return Dealer;
}());
exports.Dealer = Dealer;
//# sourceMappingURL=dealer.js.map