const User = require("../models/User");
const axios = require("axios");
const {
  validateUserInput,
  comparePassword,
  sendUser,
} = require("../utils/utils");

const register = async (req, res, next) => {
  const { userName, email, password, firstName, lastName } = req.body;
  const newUser = await User.create({
    username: userName,
    email,
    password,
  });
  try {
    const response = await axios.post(
      "https://api.chatengine.io/users/",
      {
        username: userName,
        first_name: firstName,
        email: email,
        last_name: lastName,
        secret: process.env.CHAT_ENGINE_SECRET,
      },
      {
        headers: { "private-key": process.env.CHAT_ENGINE_PRIVATE_KEY },
      }
    );
    return res.status(201).json(response.data);
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res, next) => {
  const { usernameOrEmail, password } = req.body;
  if (!validateUserInput(usernameOrEmail, password)) {
    return next(new Error("Please check your inputs"));
  }
  //TODO: FIND IS IT USERNAME OR EMAIL
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new Error("No user found"));
  }
  if (!comparePassword(password, user.password)) {
    return next(new Error("No correct password"));
  }
  sendUser(user, 200, res);
};

module.exports = { register, login };
