const CatchAsyncErrors = require("./../middlewares/CatchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const getUser = CatchAsyncErrors(async (req, res, next) => {
  try {
    res.json({
      message: "User not found",
    });
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
});
const logout = (req, res, next) => {
  try {
    res.cookie("userToken", "", { maxAge: 0 });
    res.status(200).json({
      success: true,
      message: "User logged out",
    });
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
};
module.exports = {
  getUser,
};
