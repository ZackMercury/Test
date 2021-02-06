import express from "express";
import Joi from "joi";
import { RocketBase } from "../core/rockets/RocketBase";
import { CustomRocket } from "../core/rockets/CustomRocket";

const app = express();

//Middleware
app.use(express.json());
app.use((err:Error, req:any, res:any, next:Function) => {
    res.status(500).send({errorMsg: err.message});
    next(err);
});

//Data
const rockets:{ [key:string]: RocketBase } = {};

//Request handling
app.get("/list", (req, res)=>{
    return res.send(Object.values(rockets).map(rocket=>(rocket as CustomRocket).getName()).join("\n")).end();
});

app.post("/add", (req, res)=>{
    const err = validateRocket(req.body).error;
    if(err || rockets[req.body.name.toLowerCase] || req.body.name.toLowerCase === "list")
        return res.status(409).end();
    
    rockets[req.body.name.toLowerCase()] = new CustomRocket(req.body.name);
    res.status(200).end();
});

app.get("/:name", (req, res)=>{
    if(!rockets[req.params.name.toLowerCase()])
        return res.status(404).send("This rocket does not appear on the list. Please, check the spelling.")
    else if (req.params.name.toLowerCase() == "list")
        return res.status(400).end();
    const date:Date = new Date(Date.now());
    return res.status(200).send({ 
        date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        name: rockets[req.params.name.toLowerCase()]
    }).end();
});

app.get("*", (req, res)=>res.status(404).end());

//Methods
const validateRocket = (rocket:object):Joi.ValidationResult =>
{
    const schema:Joi.Schema = Joi.object({
        name: Joi.string().min(2).required()
    });
    return schema.validate(rocket);
};

const port = process.env.PORT || 2004;

app.listen(port, ()=>console.log(`Listening on port ${port}`));