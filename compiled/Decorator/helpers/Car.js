"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.getDescription = function () {
        return this.model;
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=Car.js.map