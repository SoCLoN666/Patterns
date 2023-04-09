"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tesla = void 0;
var Car_1 = require("./helpers/Car");
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(model, price) {
        return _super.call(this, model, price) || this;
    }
    Tesla.prototype.getPrice = function () {
        return this.price;
    };
    return Tesla;
}(Car_1.Car));
exports.Tesla = Tesla;
//# sourceMappingURL=Tesla.js.map