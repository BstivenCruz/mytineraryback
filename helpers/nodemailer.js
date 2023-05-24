import nodemailer from "nodemailer";
import defaultResponse from "./response.js";
export const accountVerificationEmail = (req,res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const msg = {
    from: "parchemos3@gmail.com",
    to: req.body.email,
    subject: "Hello ✔",
    text: "Hello world?",
    html: `<b>Hello world? ${req.body.code}</b>`,
  };
  try {
    transporter.sendMail(msg);
  } catch (error) {
    req.body.success = false;
    req.body.sc = 400;
    req.body.data = error;
    return defaultResponse(req, res);
  }
};
