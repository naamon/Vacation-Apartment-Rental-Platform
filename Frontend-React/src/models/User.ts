import {Rent} from './Rent'
import React from 'react'

export default interface User{
    rents?:Array<Rent>|null;
    id:number;
    password:String|undefined;
    firstName:String|undefined;
    lastName:String|undefined;
    phoneNumber:String|undefined;
    mail:String|undefined;
    status:Number|undefined;
}