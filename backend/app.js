const express = require("express");
const errorMiddelwaer = require("./middlewares/ControllerError"); // Corrected path
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser"); // Inbuilt
const cookieParser = require("cookie-parser");

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes setup
const userRoutes = require("./Routes/UserRoutes");
const messageRoutes = require("./Routes/MesageRoutes");

app.use("/api/v2/user/", userRoutes);
app.use("/api/v2/message/", messageRoutes);
// Error handler middleware
app.use(errorMiddelwaer);
module.exports = app;
