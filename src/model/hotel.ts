export class Hotel{
    public name:string;
    public location:string;

    public total_rooms:number;
    public available_rooms:number;

    constructor(name:string,location:string,total_rooms:number,available_rooms:number){
        this.name=name;
        this.location=location;
        this.total_rooms=total_rooms;
        this.available_rooms=available_rooms;
    }
}