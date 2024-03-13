const { mongo } = require("mongoose");
const mongoose = require("mongoose");
const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Types.ObjectId,
        ref: "chat-user",
      },
    ],
    avatar: {
      type: String,
      default: "",
    },

    message: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Messages",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Conversations", conversationSchema);
