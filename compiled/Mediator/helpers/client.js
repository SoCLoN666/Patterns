"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(name, carDealer) {
        this.name = name;
        this.carDealer = carDealer;
    }
    Client.prototype.getName = function () {
        return this.name;
    };
    Client.prototype.makeOrder = function (autoModel, autoInfo) {
        this.carDealer.orderAutoAndSaveCustomerInfo(this, autoModel, autoInfo);
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map