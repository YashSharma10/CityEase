import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const reportSchema = new mongoose.Schema({
  reportId: { type: String, default: uuidv4 },
  category: String,
  email: String,
  subCategory: String,
  location: String,
  pincode: Number,
  subLocation: String,
  description: String,
  status: {
    type: String,
    enum: ["pending", "resolved"],
    default: "pending",
  },
  priority: {
    type: Number,
    default: 1,
  },
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("report", reportSchema);
