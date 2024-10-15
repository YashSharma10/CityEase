import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";
import Report from "../models/report.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "reports",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

router.post("/submit-report", upload.single("image"), async (req, res) => {
  try {
    const {
      email,
      category,
      subCategory,
      location,
      subLocation,
      pincode,
      description,
    } = req.body;
    const image = req.file ? req.file.path : null;

    const newReport = new Report({
      email,
      category,
      subCategory,
      location,
      subLocation,
      pincode,
      description,
      image,
    });

    await newReport.save();
    res
      .status(200)
      .json({ message: "Report submitted successfully!", report: newReport });
  } catch (error) {
    console.error("Error submitting report", error);
    res.status(500).json({ message: "Failed to submit report", error });
  }
});

export default router;
