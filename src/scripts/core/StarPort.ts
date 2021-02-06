import { Falcon9 } from "./rockets/Falcon9Rocket";
import { MilitaryRocket } from "./rockets/MilitaryRocket";
import { RocketBase } from "./rockets/RocketBase";
import { SLS } from "./rockets/SLSRocket";

export class StarPort
{
    public getAllRockets():RocketBase[]
    {
        let rockets:RocketBase[] = [];
        for(let i:number = 0; i < 10; i ++)
        {
            let r:RocketBase;
            let type:number = Math.floor(Math.random()*3);
            switch(type)
            {
                case 0:
                    r = new Falcon9();
                    break;
                case 1:
                    r = new SLS();
                    break;
                case 2:
                    r = new MilitaryRocket();
            }
            rockets.push(r!);
        }
        return rockets;
    }
}