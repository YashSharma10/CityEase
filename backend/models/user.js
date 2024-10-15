import mongoose from "mongoose"; // Import mongoose using ES6 syntax

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  googlePhotoUrl: { type: String, required: true },
  role: { type: String, enum: ['user', 'worker'], default: 'user' }, // Add roles
  // Add other fields as necessary
});

const User = mongoose.model("User", userSchema);
export default User; // Export the User model



