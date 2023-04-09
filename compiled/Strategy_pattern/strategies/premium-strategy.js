"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumStrategy = void 0;
var PremiumStrategy = /** @class */ (function () {
    function PremiumStrategy() {
    }
    PremiumStrategy.prototype.buyABook = function (bookPrice) {
        return bookPrice * 0.8;
    };
    return PremiumStrategy;
}());
exports.PremiumStrategy = PremiumStrategy;
//# sourceMappingURL=premium-strategy.js.map