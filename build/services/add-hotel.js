"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotels_Data = void 0;
const hotel_1 = require("../model/hotel");
exports.Hotels_Data = [];
const hotel1 = new hotel_1.Hotel('Tulips', 'Koramangala', 20, 12);
const hotel2 = new hotel_1.Hotel('IBIS', 'Bommanahali', 10, 5);
// console.log(typeof(Hotels_Data));
exports.Hotels_Data.push(hotel1);
exports.Hotels_Data.push(hotel2);
