export abstract class RocketBase
{
    protected _name:string = "";

    public launch():void
    {
        let time:Date = new Date(Date.now());
        console.log(`The ${this.name?this.name:"unnamed rocket"} launched at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
    }

    public set name(str:string)
    {
        this._name = str;
    }
    public get name () { return this._name; }
}