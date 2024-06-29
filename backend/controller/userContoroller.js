//model
const userModel = require("../models/userModel");

const { emailValidation, validLength } = require("../helper/validation");

exports.newUser = async (req, res) => {
  try {
    // inport req.body
    const {
      fname,
      lname,
      username,
      email,
      password,
      bday,
      bmonth,
      byear,
      gender,
    } = req.body;

    // FirstName validation

    if (validLength(fname, 3, 15)) {
      return res.status(400).json({
        error: "Firstname Shouid be min 3 or max 15 characters",
      });
    }

    // LastName Validation

    if (validLength(lname, 3, 15)) {
      return res.status(400).json({
        error: "LastName Shouid be min 3 or max 15 characters",
      });
    }

    // email validation

    if (!emailValidation(email)) {
      return res.status(400).json({
        error: "invalid Email address",
      });
    }
    // checkemail

    const checkemail = await userModel.findOne({ email: email });

    if (checkemail) {
      return res.status(400).json({
        error: "already email exists",
      });
    }

    // confrom

    const newuser = await new userModel({
      fname,
      lname,
      username,
      email,
      password,
      bday,
      bmonth,
      byear,
      gender,
    });

    res.status(200).json({
      success: "Restration Create successfull",
    });
  } catch (error) {}
};
