import { StarPort } from "./StarPort";

let sp = new StarPort();
let rockets = sp.getAllRockets();

let c = 1;
for(const r of rockets)
{
    console.log(`Prepare to the next launch #${c}`);
    r.launch();
    c++;
}