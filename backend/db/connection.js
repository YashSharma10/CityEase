import mongoose from "mongoose";


const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      // 0: disconnected
      await mongoose.connect(process.env.MONGO_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      });
      console.log("MongoDB connected");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
