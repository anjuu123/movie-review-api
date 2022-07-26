const express = require("express");
const { check } = require("express-validator");
const {create,verifyEmail,resendEmailVerificationToken,forgetPassword} = require("../controllers/user");
const { userValidtor, validate } = require("../middlewares/validator");
const { isValidPassResetToken } = require("../middlewares/user");

const router = express.Router();

router.post("/create", userValidtor, validate, create);
router.post("/verify-email", verifyEmail);
router.post("/resend-token", resendEmailVerificationToken);
router.post("/forget-password", forgetPassword);
router.post("/verify-pass-reset-token", isValidPassResetToken,(req, res) => {
 res.json({ valid: true })
});

module.exports = router;
