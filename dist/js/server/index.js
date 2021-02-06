"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var joi_1 = __importDefault(require("joi"));
var CustomRocket_1 = require("../core/rockets/CustomRocket");
var app = express_1.default();
//Middleware
app.use(express_1.default.json());
app.use(function (err, req, res, next) {
    res.status(500).send({ errorMsg: err.message });
    next(err);
});
//Data
var rockets = {};
//Request handling
app.get("/list", function (req, res) {
    return res.send(Object.values(rockets).map(function (rocket) { return rocket.name; }).join("\n")).end();
});
app.post("/add", function (req, res) {
    var err = validateRocket(req.body).error;
    if (err || rockets[req.body.name.toLowerCase] || req.body.name.toLowerCase === "list")
        return res.status(409).end();
    rockets[req.body.name.toLowerCase()] = new CustomRocket_1.CustomRocket(req.body.name);
    res.status(200).end();
});
app.get("/:name", function (req, res) {
    if (!rockets[req.params.name.toLowerCase()])
        return res.status(404).send("This rocket does not appear on the list. Please, check the spelling.");
    else if (req.params.name.toLowerCase() == "list")
        return res.status(400).end();
    var date = new Date(Date.now());
    return res.status(200).send({
        date: date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
        name: rockets[req.params.name.toLowerCase()]
    }).end();
});
app.get("*", function (req, res) { return res.status(404).end(); });
//Methods
var validateRocket = function (rocket) {
    var schema = joi_1.default.object({
        name: joi_1.default.string().min(2).required()
    });
    return schema.validate(rocket);
};
var port = process.env.PORT || 2004;
app.listen(port, function () { return console.log("Listening on port " + port); });
