import express from "express";
import multer from "multer";
import Report from "../models/report.js";

const router = express.Router();

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Set the destination for image uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Save files with unique names
  },
});
const upload = multer({ storage });

// POST route to submit a report
router.post("/submit-report", upload.single("image"), async (req, res) => {
  try {
    const {
      category,
      location,
      subLocation,
      subCategory,
      pincode,
      description,
      email,
    } = req.body;

    const existingReport = await Report.findOne({
      subLocation,
      subCategory,
      status: "pending",
    });
    console.log(existingReport);

    if (existingReport) {
      existingReport.priority += 1;
      await existingReport.save();
      return res.status(200).json({
        message:
          "Report already exists with the same details, priority increased!",
      });
    }

    const newReport = new Report({
      category,
      location,
      subLocation,
      subCategory,
      pincode,
      description,
      email,
      image: req.file ? req.file.path : null, // Save image path if provided
    });

    await newReport.save();

    return res.status(201).json({
      message: "New report submitted successfully!",
    });
  } catch (error) {
    console.error("Error in submitting report:", error);
    res.status(500).json({
      message: "An error occurred while submitting the report.",
      error,
    });
  }
});

export default router;
