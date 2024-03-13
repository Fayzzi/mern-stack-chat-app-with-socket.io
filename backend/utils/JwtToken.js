const SendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();
  res
    .cookie("user_token", token, {
      httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    })
    .json({
      success: true,
      message: "success",
      user,
      token,
    });
};
