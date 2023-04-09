"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStoreCustomer = void 0;
var BookStoreCustomer = /** @class */ (function () {
    function BookStoreCustomer(strategy) {
        this.strategy = strategy;
    }
    BookStoreCustomer.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    BookStoreCustomer.prototype.checkout = function (bookPrice) {
        return this.strategy.buyABook(bookPrice);
    };
    return BookStoreCustomer;
}());
exports.BookStoreCustomer = BookStoreCustomer;
//# sourceMappingURL=BookStoreCustomer.js.map