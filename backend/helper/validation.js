const userModel = require("../models/userModel");
//email validation create
function emailValidation(email) {
  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return pattern.test(email);
}

// username validation
function validLength(text, min, max) {
  if (text.length < min || text.length > max) {
    return true;
  }
}
const validUserName = async (username) => {
  let istrue = false;
  do {
    let user = await userModel.findOne({ username: username });
    if (user) {
      username += (+new Date() * Math.random()).toString().substring(0, 1);
      istrue = true;
    } else {
      istrue = false;
    }
  } while (istrue);

  return username;
};

module.exports = { emailValidation, validLength, validUserName };
