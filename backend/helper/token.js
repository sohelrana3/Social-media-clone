const jwt = require("jsonwebtoken");

const jwtToken = (user, expiredIn) => {
  return jwt.sign(user, process.env.SECRET_TOKEN, {
    expiresIn: expiredIn,
  });
};

module.exports = jwtToken;
