const express = require("express");
const _ = express.Router();
const authRouter = require("./authRouter");

_.use("/auth", authRouter);

module.exports = _;
