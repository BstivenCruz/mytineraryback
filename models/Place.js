import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    photo: { type: Array, required: true },
    capacity: { type: Number, required: true },
    cityId: { type: mongoose.Types.ObjectId, ref: "cities", required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  },
  { timestamps: true }
);

export const Place = mongoose.model('places',schema)