import { HotelManagementSystem } from "../model/hotel-management-system";
import { Hotel } from "../model/hotel";

const system=new HotelManagementSystem;

const hotel1=new Hotel('Tulips','Koramangala');
const hotel2=new Hotel('IBIS','Bommanahali');

system.addHotel(hotel1);
system.addHotel(hotel2);
