const nodemailer = require('nodemailer')
const User = require('../models/user');
const EmailVerificationToken = require('../models/emailVerificationToken');

exports.create = async (req, res) => {
    const { name, email, password } = req.body;

    // preventing duplicacy
    const oldUser = await User.findOne({ email });
    if (oldUser) return res.status(401).json({ error: "email is already in use" })

    const newUser = new User({ name, email, password });
    await newUser.save();

    //generate 6 digit otp
    let OTP = '';
    for (let i = 0; i <= 5; i++) {
        const randomVal = Math.round(Math.random() * 9)
        OTP += randomVal
    }

    //store OTP to db
    const newEmailVerificationToken = new EmailVerificationToken({
        owner: newUser._id,
        token: OTP,
    });

    await newEmailVerificationToken.save()

    //send otp to user

    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "8d8501d1eec1ee",
            pass: "2d808215d5c0e1"
        },
    });

    transport.sendMail({
        from: 'verification@reviewapp.com',
        to: newUser.email,
        subject: 'Email Verification',
        html: `
    <p> Your Verification OTP</p>
    <h1>${OTP}</h1>

    `

    })
    res.status(201)
    .json({ 
    message: "Please verify your email. OTP has been sent to your email account!" })
};