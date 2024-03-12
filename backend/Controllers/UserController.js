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
module.exports = {
  getUser,
};
