import { connectionStr } from "@/app/lib/db";
import { Restaurent } from "@/app/lib/restaurentModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req,{params}){
    await mongoose.connect(connectionStr)
    let result = await Restaurent.find()
    result = result.map((item)=>item.city.charAt(0).toUpperCase()+item.city.slice(1).toLowerCase())
    result = [...new Set(result.map((item)=>item))]
    return NextResponse.json({result,success:true})
}

