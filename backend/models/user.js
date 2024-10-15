import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email : String,
  role : {
    type : String,
    enum: ["citizen", "worker", "admin"],
  },
  image: String,
});

export default mongoose.model("user", userSchemaSchema);
