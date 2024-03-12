const express = require("express");
const app = express();
const error = require("./middlewares/error");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credential: true,
  })
);
app.use(error);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
module.exports = app;
