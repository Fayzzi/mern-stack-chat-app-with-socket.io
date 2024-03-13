const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    select: false,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  avatar: {
    type: String,
    default: "",
  },
});
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWTSECRETE, {
    expiresIn: process.env.JWTEXPIRES,
  });
};
UserSchema.methods.ComparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("chat-user", UserSchema);
