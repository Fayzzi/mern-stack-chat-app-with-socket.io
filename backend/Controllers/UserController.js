const CatchAsyncErrors = require("./../middlewares/CatchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const user = require("./../Models/UserModel");
const sendToken = require("./../utils/JwtToken");
const signUpUser = CatchAsyncErrors(async (req, res, next) => {
  try {
    const { name, username, password, gender } = req.body;
    const existingUser = await user.findOne({ username });
    if (existingUser) {
      res.json({
        message: "Username must be unique!!",
      });
      //return next(new ErrorHandler("Username must be unique!!", 500));
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
    return next(new ErrorHandler(error, 500));
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
module.exports = {
  signUpUser,
};
