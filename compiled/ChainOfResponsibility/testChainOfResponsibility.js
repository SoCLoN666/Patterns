"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MasterCard_1 = require("./paySystems/MasterCard");
var PayPal_1 = require("./paySystems/PayPal");
var Qiwi_1 = require("./paySystems/Qiwi");
var masterCard = new MasterCard_1.MasterCard(500);
var payPal = new PayPal_1.PayPal(1200);
var qiwi = new Qiwi_1.Qiwi(200);
masterCard.setIncommer(payPal);
payPal.setIncommer(qiwi);
masterCard.pay(1000);
//# sourceMappingURL=testChainOfResponsibility.js.map