import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
// import productRoutes from "./client/build";
import cors from "cors";
import cookieSession from "cookie-session";

import passport from "passport";

const app = express();
// import path from "path";
// const path = require("path");

app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//configure env
dotenv.config();

//databse config
connectDB();

//rest object

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
// app.use("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
