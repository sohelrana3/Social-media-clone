const nodemailer = require("nodemailer");

const emailSend = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: "aolz berp jnou uhkb",
    },
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Verify your Email",
    html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please Verify your email by click on this button <a href="https://www.figma.com/">Verify  ${token}</a></div></div>`,
  });
};

module.exports = emailSend;
