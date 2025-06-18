import { NextResponse } from "next/server"
import mongoose from "mongoose"
import { connectionStr } from "@/app/lib/db"
import { Food } from "@/app/lib/foodModel"

export async function POST(req) {
    const payload = await req.json()
    await mongoose.connect(connectionStr)
    let success=false
    const result = new Food(payload)
    await result.save()
    if(result){
        success=true
    }
    return NextResponse.json({ result, success })
}