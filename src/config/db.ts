import mongoose from "mongoose";

export default function connectDB() {
  const url = process.env.MONGODB_URL || "mongodb://127.0.0.1/gym_app_ar";

  mongoose.connect(url);

  const dbConnection = mongoose.connection;
  dbConnection.once("open", () => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
}
