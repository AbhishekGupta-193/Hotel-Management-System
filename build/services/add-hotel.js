"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hotel_management_system_1 = require("../model/hotel-management-system");
const hotel_1 = require("../model/hotel");
const system = new hotel_management_system_1.HotelManagementSystem;
const hotel1 = new hotel_1.Hotel('Tulips', 'Koramangala');
const hotel2 = new hotel_1.Hotel('IBIS', 'Bommanahali');
system.addHotel(hotel1);
system.addHotel(hotel2);
