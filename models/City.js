import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    continent: { type: String, required: true },
    photo: { type: String, required: true },
    population: { type: Number, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  },
  {
    timestamps: true,
  }
);

export const Cit = mongoose.model("cities", schema);
