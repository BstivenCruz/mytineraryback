import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    placeId: { type: mongoose.Types.ObjectId, ref: "cities", required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

export const Event = mongoose.model("events", schema);
