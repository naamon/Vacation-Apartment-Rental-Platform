import internal from "stream";
import { ListFormat } from "typescript";
import { Category } from "./Category";
import { Rent } from "./Rent";

export interface Apartment{
    category?:Category;
    rents?:Array<Rent>;
    id:Number;
    name?:String;
    description?:String;
    numOfRooms?:Number;
    numOfBeds?:Number;
    pool?:Boolean;
    price:Number;
    available?:Boolean;
    img?:String
}