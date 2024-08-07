"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_hotel_1 = require("./add-hotel");
let Hotel_List = [];
function display_hotels(city) {
    add_hotel_1.Hotels_Data.forEach((element) => {
        if (element.location == city)
            Hotel_List.push(element);
    });
    console.log("List Of Hotels are as follows :", Hotel_List);
}
display_hotels('Koramangala'); //display hotels for a particular location
