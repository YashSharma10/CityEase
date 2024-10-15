import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import reportRoutes from "./routes/report.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", reportRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 6005, () => {
      console.log(`⚙️ Server is running at port: 6005`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed!!!", err);
  });
