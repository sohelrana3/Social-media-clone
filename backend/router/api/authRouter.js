const express = require("express");
const _ = express.Router();

_.post("/res", (req, res) => {res.send("res")});

module.exports = _;
