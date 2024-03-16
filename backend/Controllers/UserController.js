const catchAsyncErrors = require("./../middlewares/CatchAsyncError");
const user = require("./../Models/UserModel");
const sendToken = require("./../utils/JwtToken");
const Conversation = require("../Models/Conversation");
const ErrorHandler = require("./../utils/ErrorHandler");
const signUpUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const { name, username, password, gender } = req.body;
    const existingUser = await user.findOne({ username: username });
    if (existingUser) {
      return next(new ErrorHandler("User already exists", 400));
    } else {
      const newUser = await user.create({
        name,
        username,
        password,
        gender,
      });
      sendToken(newUser, 200, res);
    }
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
});
const logout = (req, res, next) => {
  try {
    res.cookie("user_token", "", { maxAge: 0 });
    res.status(200).json({
      success: true,
      message: "User logged out",
    });
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
};
//get current logged in user
const getUser = async (req, res, next) => {
  try {
    const usercheck = await user.findById(req.user.id);
    if (!usercheck) {
      return next(new ErrorHandler("User doesn't exist", 400));
    }
    res.json({
      usercheck,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
};
//get all user for sidebar
const sidebarusers = catchAsyncErrors(async (req, res, next) => {
  try {
    const currentUser = req.user.id;
    const findallUser = await Conversation.find({
      participants: {
        $in: [currentUser],
      },
    });
    res.json(findallUser);
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
});
module.exports = {
  signUpUser,
  sidebarusers,
  getUser,
  logout,
};
