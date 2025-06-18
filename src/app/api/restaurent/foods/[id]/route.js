import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { Food } from "@/app/lib/foodModel";

export async function GET(req, {params}) {
    const {id} = await params
    let success=false
    await mongoose.connect(connectionStr)
    const result = await Food.find({resto_id:id})
    if(result){
        success = true
    }
    return NextResponse.json({ result, success})
}

export async function DELETE(req, {params}) {
    const {id} = await params
    await mongoose.connect(connectionStr)
    let success = false
    const result = await Food.findByIdAndDelete(id)
    if(result){
        success = true
    }
      return NextResponse.json({ result, success})
}

export async function PUT(req, {params}) {
    const {id} = await params
    const payload = await req.json()
    await mongoose.connect(connectionStr)
    let success = false
    const result = await Food.findByIdAndUpdate(id)
    if(result){
        success = true
    }
      return NextResponse.json({ result, success})
}