
import mongoose from "mongoose";

const restaurentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  city: String,
  address: String,
  contact: String,
});

export const Restaurent = mongoose.models.Restaurent || mongoose.model("Restaurent", restaurentSchema);
