import { RocketBase } from "./RocketBase";

export class CustomRocket extends RocketBase
{
    constructor(name:string)
    {
        super();
        this.name = name;
    }

    public getName():string
    {
        return this.name;
    }
}