import { Hotel } from "./hotel";

export class HotelManagementSystem{
    public Hotels_Data:Hotel[]=[];

    addHotel(new_hotel:Hotel):void{
        this.Hotels_Data.push(new_hotel);
        console.log(this.Hotels_Data);
    }
}