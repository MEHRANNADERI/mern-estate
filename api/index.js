import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from "cookie-parser";
dotenv.config();



import User from "./models/use.model.js"; // مسیر مدل خودت

// mongoose.connect(process.env.MONGO).then(async () => {
//   console.log("✅ Connected to MongoDB");

//   await User.syncIndexes(); // 👈 این خط ایندکس‌ها رو از schema ایجاد می‌کنه
//   console.log("✅ Indexes synced");
// });


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("conneted to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use(cookieParser())


app.listen(3000, () => {
  console.log("Server is runing on port 3000!");
});



app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


app.use((err, req, res, next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error'
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})