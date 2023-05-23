import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    pais: { type: String, required: true },
    photo: { type: String, required: true },
    population: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const City = mongoose.model("cities", schema);
