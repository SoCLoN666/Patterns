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
exports.HarryPotterBook = void 0;
var BookTemplate_1 = require("../template/BookTemplate");
var HarryPotterBook = /** @class */ (function (_super) {
    __extends(HarryPotterBook, _super);
    function HarryPotterBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HarryPotterBook.prototype.drawCover = function () {
        console.log("drawing Harry Potter cover!");
    };
    HarryPotterBook.prototype.paintIllustrations = function () {
        console.log("no illustration needed!");
    };
    HarryPotterBook.prototype.editText = function () {
        console.log("Harry Potter text edited!");
    };
    HarryPotterBook.prototype.printText = function () {
        console.log("Harry Potter text printed!");
    };
    HarryPotterBook.prototype.sewBook = function () {
        console.log("Harry Potter book is sewed!");
    };
    return HarryPotterBook;
}(BookTemplate_1.Book));
exports.HarryPotterBook = HarryPotterBook;
//# sourceMappingURL=HarryPotter.js.map