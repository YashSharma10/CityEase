import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
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
