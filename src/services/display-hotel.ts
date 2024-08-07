import { Hotels_Data } from './add-hotel';
import { Hotel } from '../model/hotel';

let Hotel_List:Hotel[]=[];
function display_hotels(city:string){
    Hotels_Data.forEach((element)=>{
        if(element.location==city)Hotel_List.push(element);
    })
    console.log("List Of Hotels are as follows :",Hotel_List);
}


display_hotels('Koramangala');  //display hotels for a particular location