import { connectionStr } from "@/app/lib/db";
import { Restaurent } from "@/app/lib/restaurentModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req){
    let queryParams = req.nextUrl.searchParams
    let filter = {}
    if(queryParams.get('location')){
        let city = queryParams.get('location')
        filter = {city:{$regex:new RegExp(city, 'i')}}
        console.log(filter,"city filter")
    }else if(queryParams.get('restaurent')){
        let name = queryParams.get('restaurent')
        filter = {name:{$regex:new RegExp(name, 'i')}}
        console.log(filter,"restaurent filter")
    }
    await mongoose.connect(connectionStr)
    let result = await Restaurent.find(filter)
    return NextResponse.json({success:true,result})
}