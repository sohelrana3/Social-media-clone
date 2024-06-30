//model
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const {
  emailValidation,
  validLength,
  validUserName,
} = require("../helper/validation");

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

    // username validation

    let tempusername = fname + lname;

    let finaluser = await validUserName(tempusername);

    console.log((+new Date() * Math.random()).toString().substring(0, 1));

    // pasword hash

    const hashpasword = await bcrypt.hash(password, 10);

    console.log(hashpasword);

    // confrom

    const newuser = await new userModel({
      fname,
      lname,
      email,
      username: finaluser,
      password: hashpasword,
      bday,
      bmonth,
      byear,
      gender,
    }).save();

    res.status(200).json({
      newuser,
      // success: "Restration Create successfull",
    });
  } catch (error) {}
};
