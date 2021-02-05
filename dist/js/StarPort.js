"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarPort = void 0;
var Falcon9Rocket_1 = require("./rockets/Falcon9Rocket");
var MilitaryRocket_1 = require("./rockets/MilitaryRocket");
var SLSRocket_1 = require("./rockets/SLSRocket");
var StarPort = /** @class */ (function () {
    function StarPort() {
    }
    StarPort.prototype.getAllRockets = function () {
        var rockets = [];
        for (var i = 0; i < 10; i++) {
            var r = void 0;
            var type = Math.floor(Math.random() * 3);
            switch (type) {
                case 0:
                    r = new Falcon9Rocket_1.Falcon9();
                    break;
                case 1:
                    r = new SLSRocket_1.SLS();
                    break;
                case 2:
                    r = new MilitaryRocket_1.MilitaryRocket();
            }
            rockets.push(r);
        }
        return rockets;
    };
    return StarPort;
}());
exports.StarPort = StarPort;
