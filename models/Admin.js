import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String, required: true },
    age: { type: Number, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "cities", required: true },
    active: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const Admin = mongoose.model("admins", schema);
