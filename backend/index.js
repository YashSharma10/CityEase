import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import reportRoutes from "./routes/report.js";
import cors from "cors";
import authRoutes from "./routes/user.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api", reportRoutes);
app.use("/user", authRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 6005, () => {
      console.log(`⚙️ Server is running at port: 6005`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed!!!", err);
  });
