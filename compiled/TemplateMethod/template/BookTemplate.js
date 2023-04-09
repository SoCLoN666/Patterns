"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.createBook = function () {
        this.drawCover();
        this.paintIllustrations();
        this.editText();
        this.printText();
        this.sewBook();
    };
    Book.prototype.drawCover = function () { };
    Book.prototype.paintIllustrations = function () { };
    Book.prototype.editText = function () { };
    Book.prototype.printText = function () { };
    Book.prototype.sewBook = function () { };
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=BookTemplate.js.map