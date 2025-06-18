import { connectionStr } from "@/app/lib/db"
import { Food } from "@/app/lib/foodModel"
import { Restaurent } from "@/app/lib/restaurentModel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET(req,{params}){
    const {id} =await params
    await mongoose.connect(connectionStr)
    let restaurentDetail= await Restaurent.findOne({_id:id})
    let foodItem = await Food.find({resto_id:id})
    return NextResponse.json({restaurentDetail,foodItem ,success:true})
}