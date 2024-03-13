const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getAllmessages,
} = require("./../Controllers/MessageController");
const { isAuthenticated } = require("../middlewares/Auth");
router.post("/send-new-message/:id", isAuthenticated, sendMessage);
router.get("/get-all-messages/:id", isAuthenticated, getAllmessages);

module.exports = router;
