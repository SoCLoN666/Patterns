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
exports.Autopilot = void 0;
var CarOptions_1 = require("../CarOptions");
var Autopilot = /** @class */ (function (_super) {
    __extends(Autopilot, _super);
    function Autopilot(car) {
        return _super.call(this, car) || this;
    }
    Autopilot.prototype.getPrice = function () {
        return this.car.getPrice() + 5000;
    };
    Autopilot.prototype.getCarDescription = function () {
        return "".concat(_super.prototype.getDescription.call(this), " with Autopilot");
    };
    return Autopilot;
}(CarOptions_1.CarOptions));
exports.Autopilot = Autopilot;
//# sourceMappingURL=Autopilot.js.map