"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RocketBase = void 0;
var RocketBase = /** @class */ (function () {
    function RocketBase() {
        this._name = "";
    }
    RocketBase.prototype.launch = function () {
        var time = new Date(Date.now());
        console.log("The " + (this.name ? this.name : "unnamed rocket") + " launched at " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    };
    Object.defineProperty(RocketBase.prototype, "name", {
        get: function () { return this._name; },
        set: function (str) {
            this._name = str;
        },
        enumerable: false,
        configurable: true
    });
    return RocketBase;
}());
exports.RocketBase = RocketBase;
