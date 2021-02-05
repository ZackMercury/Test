"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilitaryRocket = void 0;
var RocketBase_1 = require("./RocketBase");
var MilitaryRocket = /** @class */ (function (_super) {
    __extends(MilitaryRocket, _super);
    function MilitaryRocket() {
        var _this = _super.call(this) || this;
        _this.name = "TOP SECRET";
        return _this;
    }
    MilitaryRocket.prototype.launch = function () {
        console.log("TOP SECRET");
    };
    return MilitaryRocket;
}(RocketBase_1.RocketBase));
exports.MilitaryRocket = MilitaryRocket;
