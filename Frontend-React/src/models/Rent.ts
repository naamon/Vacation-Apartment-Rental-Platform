import { Apartment } from "./Apartment";
import { LocalDate } from "local-date";
import User from "./User";

export interface Rent{
    user?:User;
    apartment:Apartment;
    id?:number;
    numberOfDays?:Number;
}