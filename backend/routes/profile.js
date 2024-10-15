import express from "express";
import Report from "../models/report.js"; // Ensure your model file is also converted to ES6 modules

const router = express.Router();

// Get reports by user email
router.get("/user-reports/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const reports = await Report.find({ email });

    if (!reports || reports.length === 0) {
      return res
        .status(404)
        .json({ message: "No reports found for this user." });
    }

    res.json(reports);
  } catch (error) {
    console.error("Error fetching user reports:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
