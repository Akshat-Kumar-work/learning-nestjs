//this file contain structure of any data 
//dto => data transfer object

// export interface Book  {
//     id:string,
//     title:string,
//     author:string,
//     pubilshed:string
// }

//the object validation cannot perform over classess

import { IsString,IsNumber } from "class-validator";

export class BookDto{
    @IsNumber()
    id:number;
    @IsString()
    name:string;
}