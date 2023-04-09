"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Autopilot_1 = require("./helpers/descorators/Autopilot");
var PanoramicRoof_1 = require("./helpers/descorators/PanoramicRoof");
var Parktronic_1 = require("./helpers/descorators/Parktronic");
var Tesla_1 = require("./Tesla");
var tesla = new Tesla_1.Tesla("Model 3", 50000);
tesla = new Parktronic_1.Parktronic(tesla);
tesla = new Autopilot_1.Autopilot(tesla);
tesla = new PanoramicRoof_1.PanoramicRoof(tesla);
console.warn(tesla.getDescription());
console.warn(tesla.getPrice());
//# sourceMappingURL=testDecorator.js.map