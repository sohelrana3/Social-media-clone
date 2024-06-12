const express = require("express");
const _ = express.Router();
const apiRouter = require("./api/index");

const api = process.env.BASE_URL;
// /api/v1/

_.use(api, apiRouter);

_.use(api, (req, res) => res.json("No Api Found On This Route"));

module.exports = _;
