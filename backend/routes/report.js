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


router.put("/reports/:id/status", async (req, res) => {
  try {
    const reportId = req.params.id;
    const { status } = req.body;

    const updatedReport = await Report.findByIdAndUpdate(
      reportId,
      { status },
      { new: true }
    );

    if (!updatedReport) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json({ message: "Report status updated successfully", updatedReport });
  } catch (error) {
    console.error("Error updating report status:", error);
    res.status(500).json({ message: "An error occurred while updating the report status." });
  }
});


export default router;
