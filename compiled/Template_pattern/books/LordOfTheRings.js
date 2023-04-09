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
exports.LordOfRingBook = void 0;
var BookTemplate_1 = require("../template/BookTemplate");
var LordOfRingBook = /** @class */ (function (_super) {
    __extends(LordOfRingBook, _super);
    function LordOfRingBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LordOfRingBook.prototype.drawCover = function () {
        console.log("Lord of Rings cover is drawn!");
    };
    LordOfRingBook.prototype.paintIllustrations = function () {
        console.log("Lord of Rings paintings are done!");
    };
    LordOfRingBook.prototype.editText = function () {
        console.log("Lord of Rings text is edited!");
    };
    LordOfRingBook.prototype.printText = function () {
        console.log("Lord of Rings text is printed!");
    };
    LordOfRingBook.prototype.sewBook = function () {
        console.log("Lord of Rings book is sewed!");
    };
    return LordOfRingBook;
}(BookTemplate_1.Book));
exports.LordOfRingBook = LordOfRingBook;
//# sourceMappingURL=LordOfTheRings.js.map