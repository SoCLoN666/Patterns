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
exports.CarOptions = void 0;
var Car_1 = require("./Car");
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions(car) {
        var _this = _super.call(this, car.model, car.price) || this;
        _this.car = car;
        return _this;
    }
    return CarOptions;
}(Car_1.Car));
exports.CarOptions = CarOptions;
//# sourceMappingURL=CarOptions.js.map