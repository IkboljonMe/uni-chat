const bycrpt = require("bcryptjs");

const validateUserInput = (usernameOrEmail, password) => {
  return usernameOrEmail && password;
};

const comparePassword = (password, hashedPassword) => {
  return bycrpt.compareSync(password, hashedPassword);
};

const sendUser = (user, statusCode, res) => {
  res.status(statusCode).json({
    userId: user._id,
    username: user.username,
    email: user.email,
  });
};

module.exports = {
  validateUserInput,
  comparePassword,
  sendUser,
};
