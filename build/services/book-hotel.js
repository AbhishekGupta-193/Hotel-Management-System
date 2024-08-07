"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_hotel_1 = require("./add-hotel");
let available_hotels = [];
// console.log(Hotels_Data);
function book_hotel(required_rooms) {
    available_hotels = find_available_hotel(required_rooms);
    if (available_hotels.length == 0) {
        console.log("Sorry, No Hotels Avaialble!");
    }
    else {
        console.log("Hotel Booked is: ", available_hotels[0]);
        add_hotel_1.Hotels_Data[0].available_rooms -= required_rooms;
    }
}
function find_available_hotel(required_rooms) {
    add_hotel_1.Hotels_Data.forEach((element) => {
        if (element.available_rooms >= required_rooms) {
            available_hotels.push(element.name);
        }
    });
    return available_hotels;
}
book_hotel(6);
console.log(available_hotels);
