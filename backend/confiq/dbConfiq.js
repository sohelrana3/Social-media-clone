const mongoose = require("mongoose");

function dbConnection() {
  mongoose
    .connect(
      `mongodb+srv://sohel:sohel@mern-state.ier4ijb.mongodb.net/mern-state?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Database Connect");
    });
}

module.exports = dbConnection;
