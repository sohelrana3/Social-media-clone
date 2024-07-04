//model
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwtToken = require("../helper/token");
const emailSend = require("../helper/emailSend");
const jwt = require("jsonwebtoken");

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

    // pasword hash

    const hashpasword = await bcrypt.hash(password, 10);

    // user create

    const user = await new userModel({
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
    // token create
    const emailToken = jwtToken({ id: user._id.toString() }, "1h");

    // const emailToken = jwt.sign(
    //   { id: user._id.toString() },
    //   process.env.SECRET_TOKEN,
    //   {
    //     expiresIn: "1h",
    //   }
    // );

    // user token create
    const Token = jwtToken({ id: user._id.toString() }, "7d");

    // email send

    const emalisend = emailSend(user.email, emailToken);

    res.send({
      id: user._id,
      username: user.username,
      profilepicture: user.profilepicture,
      fname: user.fname,
      lname: user.lname,
      token: Token,
      veryfied: user.veryfied,
      message: "Regstration Successfull ! plase activeate email to start",
    });
  } catch (error) {}
};

exports.activeUser = async (req, res) => {
  try {
    const { token } = req.body;
    const user = jwt.verify(token, process.env.SECRET_TOKEN);
    const check = await userModel.findById(user.id);

    if (check.veryfied === true) {
      return res.status(400).json({
        message: "This email is active",
      });
    } else {
      await userModel.findByIdAndUpdate(user.id, { veryfied: true });
      return res.status(200).json({
        message: "account has been activated suceessfull",
      });
    }
  } catch (error) {
    res.status(404).json({
      error: error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // email checking
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "username or password incorred!",
      });
    }

    // password checking

    const checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword){
      return res.status(400).json({
        message: "username or password incorred!",
      })
    }
    //user veryfi
    if(user.veryfied === false){
      return res.status(400).json({
        message: "Plase account is not veryfi",
      })
    }

    // token create
    const Token = jwtToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      username: user.username,
      profilepicture: user.profilepicture,
      fname: user.fname,
      lname: user.lname,
      token: Token,
      veryfied: user.veryfied,
      message: "Login Successfull",
    });


  } catch (error) {
    res.status(404).json({
      error: error,
    });
  }
};
