import { Autopilot } from "./helpers/descorators/Autopilot";
import { PanoramicRoof } from "./helpers/descorators/PanoramicRoof";
import { Parktronic } from "./helpers/descorators/Parktronic";
import { Tesla } from "./Tesla";

let tesla = new Tesla("Model 3", 50000);
tesla = new Parktronic(tesla);
tesla = new Autopilot(tesla);
tesla = new PanoramicRoof(tesla);

console.warn(tesla.getDescription());
console.warn(tesla.getPrice());
