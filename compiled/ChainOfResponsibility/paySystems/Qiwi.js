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
exports.Qiwi = void 0;
var Account_1 = require("../helper/Account");
var Qiwi = /** @class */ (function (_super) {
    __extends(Qiwi, _super);
    function Qiwi(balance) {
        var _this = _super.call(this, balance, "Qiwi") || this;
        _this.name = "Qiwi";
        _this.balance = balance;
        return _this;
    }
    return Qiwi;
}(Account_1.Account));
exports.Qiwi = Qiwi;
//# sourceMappingURL=Qiwi.js.map