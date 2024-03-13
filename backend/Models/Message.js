const { mongo } = require("mongoose");
const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Types.ObjectId,
      ref: "chat-user",
      required: true,
    },
    recieverID: {
      type: mongoose.Types.ObjectId,
      ref: "chat-user",
      required: true,
    },
    message: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Messages", messageSchema);
