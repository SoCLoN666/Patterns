"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoldenStrategy = void 0;
var GoldenStrategy = /** @class */ (function () {
    function GoldenStrategy() {
    }
    GoldenStrategy.prototype.buyABook = function (bookPrice) {
        return bookPrice * 0.9;
    };
    return GoldenStrategy;
}());
exports.GoldenStrategy = GoldenStrategy;
//# sourceMappingURL=golden-strategy.js.map