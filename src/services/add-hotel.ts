import { Hotel } from "../model/hotel";

export const Hotels_Data:Hotel[]=[];

const hotel1=new Hotel('Tulips','Koramangala');
const hotel2=new Hotel('IBIS','Bommanahali');

// console.log(typeof(Hotels_Data));

Hotels_Data.push(hotel1);
Hotels_Data.push(hotel2);



