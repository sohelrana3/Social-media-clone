const express = require("express");
const _ = express.Router();
// controller
const {newUser, activeUser} = require("../../controller/userContoroller")

// usee create router
_.post("/regstration", newUser);
_.post("/active", activeUser);

module.exports = _;
