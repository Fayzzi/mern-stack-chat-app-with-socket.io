const CatchAsyncErrors = require("./../middlewares/CatchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const Message = require("./../Models/Message");
const Conversation = require("./../Models/Conversation");

const sendMessage = CatchAsyncErrors(async (req, res, next) => {
  try {
    const { message } = req.body;
    const { id: recieverID } = req.params;
    const senderId = req.user.id;
    let conversation = await Conversation.findOne({
      participants: { $all: [recieverID, senderId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverID],
      });
    }
    const newMessage = new Message({
      senderId,
      recieverID,
      message,
    });
    if (newMessage) {
      conversation.message.push(newMessage._id);
    }
    //SOCKET IO FUNCTIONALITY HERE

    // await conversation.save();
    // await newMessage.save();
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(200).json(newMessage);
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
});
const getAllmessages = CatchAsyncErrors(async (req, res, next) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user.id;
    const conversation = await Conversation.findOne({
      participants: { $all: [userToChatId, senderId] },
    }).populate("message");
    if (!conversation) {
      return next(new ErrorHandler([], 200));
    }
    const allmessages = conversation.message;
    res.status(200).json(allmessages);
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
});

module.exports = {
  sendMessage,
  getAllmessages,
};
