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
exports.SLS = void 0;
var RocketBase_1 = require("./RocketBase");
var SLS = /** @class */ (function (_super) {
    __extends(SLS, _super);
    function SLS() {
        var _this = _super.call(this) || this;
        _this.name = "SLS";
        return _this;
    }
    return SLS;
}(RocketBase_1.RocketBase));
exports.SLS = SLS;
