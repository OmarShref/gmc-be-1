var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mohandesomar@gmail.com",
    pass: "qgzssfgpdwmcsdel",
  },
});

var mailOptions = {
  from: "mohandesomar@gmail.com",
  to: "mohandsomar@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
