exports.generateOTP = (otp_length = 6) => {
  let OTP = "";
  for (let i = 0; i <= otp_length; i++) {
    const randomVal = Math.round(Math.random() * 9);
    OTP += randomVal;
  }

  return OTP;
};

exports.generateMailTransporter = () =>
  nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8d8501d1eec1ee",
      pass: "2d808215d5c0e1",
    },
  });
