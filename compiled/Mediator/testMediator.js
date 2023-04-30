"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./helpers/client");
var dealer_1 = require("./helpers/dealer");
var bmvDeadler = new dealer_1.Dealer();
var clientJohn = new client_1.Client("John", bmvDeadler);
clientJohn.makeOrder("BMW x5", "with Sport regime");
//# sourceMappingURL=testMediator.js.map