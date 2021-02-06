import { RocketBase } from "./RocketBase";

export class MilitaryRocket extends RocketBase
{
    constructor()
    {
        super();
        this.name = "TOP SECRET";
    }

    public launch():void
    {
        console.log("TOP SECRET");
    }
}