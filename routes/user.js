const express = require("express");
const { check } = require("express-validator");
const {
  create,
  verifyEmail,
  resendEmailVerificationToken,
  forgetPassword,
} = require("../controllers/user");
const { userValidtor, validate } = require("../middlewares/validator");

const router = express.Router();

router.post("/create", userValidtor, validate, create);
router.post("/verify-email", verifyEmail);
router.post("/resend-token", resendEmailVerificationToken);
router.post("/forget-password", forgetPassword);

module.exports = router;
