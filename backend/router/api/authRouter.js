const express = require("express");
const _ = express.Router();
// controller
const {newUser, activeUser, login} = require("../../controller/userContoroller")

// usee create router
_.post("/", newUser);
_.post("/active", activeUser);
_.post("/login", login);

module.exports = _;
