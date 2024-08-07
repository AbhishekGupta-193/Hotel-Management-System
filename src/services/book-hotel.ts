import { Hotels_Data } from "./add-hotel";

let available_hotels:string[]=[];
// console.log(Hotels_Data);

function book_hotel(required_rooms:number):void{
    available_hotels=find_available_hotel(required_rooms);
    if(available_hotels.length==0){
        console.log("Sorry, No Hotels Avaialble!")
    }
    else{
        console.log("Hotel Booked is: ",available_hotels[0]);
        Hotels_Data[0].available_rooms-=required_rooms;
    }
}

function find_available_hotel(required_rooms:number):string[]{
    Hotels_Data.forEach((element)=>{
        if(element.available_rooms>=required_rooms){
            available_hotels.push(element.name);
        }
    })
    return available_hotels;
}

book_hotel(6);
console.log(available_hotels);