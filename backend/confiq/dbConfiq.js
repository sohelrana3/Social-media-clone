const mongoose = require("mongoose");

function dbConnection() {
  mongoose
    .connect(
      `mongodb+srv://sohel:sohel@cluster0.7rhqgmu.mongodb.net/`
    )
    .then(() => {
      console.log("Database Connect");
    });
}

module.exports = dbConnection;
