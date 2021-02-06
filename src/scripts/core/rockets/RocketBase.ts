export abstract class RocketBase
{
    protected name:string = "";

    public launch():void
    {
        let time:Date = new Date(Date.now());
        console.log(`The ${this.name?this.name:"unnamed rocket"} launched at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
    }
}