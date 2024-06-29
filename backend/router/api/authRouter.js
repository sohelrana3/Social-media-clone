const express = require("express");
const _ = express.Router();
// controller
const {newUser} = require("../../controller/userContoroller")

// usee create router
_.post("/regstration", newUser);

module.exports = _;
