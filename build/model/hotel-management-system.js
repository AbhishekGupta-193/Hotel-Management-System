"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManagementSystem = void 0;
class HotelManagementSystem {
    constructor() {
        this.Hotels_Data = [];
    }
    addHotel(new_hotel) {
        this.Hotels_Data.push(new_hotel);
        console.log(this.Hotels_Data);
    }
}
exports.HotelManagementSystem = HotelManagementSystem;
