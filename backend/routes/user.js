import express from "express"; // Import express using ES6 syntax
import User from "../models/user.js";

const router = express.Router();

// User Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, googlePhotoUrl } = req.body;
  console.log(email);

  try {
    const { email, name, googlePhotoUrl } = req.body;
    const newUser = new User({
      email,
      name,
      googlePhotoUrl,
    });
    const isMatch = await User.findOne({ email });
    if (isMatch && isMatch.email === email) {
      res.status(200).json({ message: email });
    } else {
      await newUser.save();
      res.status(201).json({ message: email });
    }
  } catch (error) {
    console.log("Internal error", error);
  }
  // try {
  //   // Check if the user already exists
  //   const existingUser = await User.find({ email });
  //   if (existingUser) {
  //     return res.status(400).json({ message: "User already exists." });
  //   }

  //   // Create a new user
  //   const newUser = new User({ name, email, googlePhotoUrl });
  //   await newUser.save();

  //   res.status(201).json({ message: "User created successfully." });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Server error." });
  // }
});

export default router;
