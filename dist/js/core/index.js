"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StarPort_1 = require("./StarPort");
var sp = new StarPort_1.StarPort();
var rockets = sp.getAllRockets();
var c = 1;
for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
    var r = rockets_1[_i];
    console.log("Prepare to the next launch #" + c);
    r.launch();
    c++;
}
