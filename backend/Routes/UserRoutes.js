const express = require("express");
const router = express.Router();
const { signUpUser } = require("./../Controllers/UserController");
router.post("/signup", signUpUser);
module.exports = router;
