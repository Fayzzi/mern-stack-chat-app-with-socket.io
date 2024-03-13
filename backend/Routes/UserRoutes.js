const express = require("express");
const router = express.Router();
const {
  signUpUser,
  sidebarusers,
  logout,
} = require("./../Controllers/UserController");
const { isAuthenticated } = require("../middlewares/Auth");
router.post("/signup", signUpUser);
router.post("/get-sidebar", isAuthenticated, sidebarusers);
router.post("/logout", isAuthenticated, logout);

module.exports = router;
