const user = require("./../Models/UserModel");
const ErrorHandler = require("./../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
exports.isAuthenticated = async (req, res, next) => {
  try {
    const { user_token } = req.cookies;
    if (user_token) {
      const userData = jwt.verify(user_token, process.env.JWTSECRETE);
      req.user = await user.findById(userData.id);
      next();
    } else {
      return next(new ErrorHandler("Authentication Error!!", 500));
    }
  } catch (error) {
    return next(new ErrorHandler("Authentication Error!!", 500));
  }
};
