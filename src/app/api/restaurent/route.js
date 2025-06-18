import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { Restaurent } from "@/app/lib/restaurentModel";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionStr)
    await Restaurent.find()
    return NextResponse.json({ result: "restaurentsModel data get" })
}

export async function POST(req) {
    const payload = await req.json();
    await mongoose.connect(connectionStr)
    let result;
    let success = false
    if (payload.login) {
        result = await Restaurent.findOne({ email: payload.email, password: payload.password })
        if(result){
        success = true
        }

    } else {
        const restaurent = await new Restaurent(payload)
        result = await restaurent.save()
        if(result){
        success = true
        }
    }
    return NextResponse.json({ result, success })
}