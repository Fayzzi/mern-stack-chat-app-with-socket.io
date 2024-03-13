const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getAllmessages,
} = require("./../Controllers/MessageController");
router.post("/send-new-message", sendMessage);
router.get("/get-all-messages", getAllmessages);

module.exports = router;
