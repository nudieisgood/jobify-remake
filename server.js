import "express-async-errors";
import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";

import cloudinary from "cloudinary";

//public folder
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

//import routes
import jobRoute from "./routes/jobRoute.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRouter.js";

//import middleware
import { authenticateUser } from "./middlewares/authMiddleware.js";

dotenv.config();
if (process.env.NODE_ENV !== "production") {
  console.log("dev mode");
}
const app = express();
app.use(express.json());
app.use(cookieParser());

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./public")));

//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use("/api/v1/jobs", authenticateUser, jobRoute);

app.use("/api/v1/auth", authRoute);

app.use("/api/v1/users", authenticateUser, userRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: "Page not found" });
});

app.use((err, req, res, next) => {
  const status = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something went wrong.";
  res.status(status).json({ msg });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
