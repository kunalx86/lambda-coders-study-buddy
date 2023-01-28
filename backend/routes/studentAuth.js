const express = require('express');
const studentAuthController = require("../controllers/studentAuth")

const Auth = require('../Authentication/is-auth');
const router = express.Router();
const { Student } = require("../models/Student");



router.post('/signup', studentAuthController.signup);

router.post('/login', studentAuthController.login);

router.post('/signup/otp', studentAuthController.otpVerification);
router.post('/signup/resetOtp', studentAuthController.resetPassword);
router.post('/signup/otp-resend', studentAuthController.resendOtp)
router.post('/signup/checkOtp', studentAuthController.resetOtpVerification);
router.post('/signup/reset-password', studentAuthController.newPassword);


// Fetching access Token using refresh token
router.post("/auth/token/", Auth.GetnewAccessToken);


module.exports = router;
