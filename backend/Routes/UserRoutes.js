const express = require("express");
const router = express.Router();
const {
  signUpUser,
  sidebarusers,
  logout,
  getUser,
} = require("./../Controllers/UserController");
const { isAuthenticated } = require("../middlewares/Auth");
router.post("/signup", signUpUser);
router.post("/get-sidebar", isAuthenticated, sidebarusers);
router.post("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);

module.exports = router;
