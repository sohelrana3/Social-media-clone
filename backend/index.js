require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./confiq/dbConfiq");
const router = require("./router");

const PORT = process.env.PORT || 8000;
// middleware start
const app = express();
app.use(express.json());
app.use(cors());
// middleware end

// database connect
dbConnection();

app.use(router);

//server start
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
