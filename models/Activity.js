import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    cityId: { type: mongoose.Types.ObjectId, ref: "cities", required: true },
    name: { type: String, required: true },
    photo: { type: Array, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Activity = mongoose.model("activities", schema);
