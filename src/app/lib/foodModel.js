import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    resto_id: mongoose.Schema.Types.ObjectId
})

export const Food =mongoose.models.Food || mongoose.model("Food", foodSchema)