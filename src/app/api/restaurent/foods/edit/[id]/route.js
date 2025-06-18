import { connectionStr } from "@/app/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Food } from "@/app/lib/foodModel";

export async function GET(req, {params}){
const {id} = await params
let success= false
await mongoose.connect(connectionStr)
const result = await Food.findOne({_id:id})
if(result){
    success= true
}
    return NextResponse.json({result,success})
}

export async function PUT(req,{params}){
    const {id} =await params
    const payload = await req.json()
   let success = false
   await mongoose.connect(connectionStr)
   const result = await Food.findOneAndUpdate({_id:id},payload)
   if (result){
    success= true
   }
    return NextResponse.json({result, success})
}