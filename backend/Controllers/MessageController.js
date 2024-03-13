const CatchAsyncErrors = require("./../middlewares/CatchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const Message = require("./../Models/Message");
const sendMessage = CatchAsyncErrors(async (req, res, next) => {});
const getAllmessages = CatchAsyncErrors(async (req, res, next) => {});

module.exports = {
  sendMessage,
  getAllmessages,
};
