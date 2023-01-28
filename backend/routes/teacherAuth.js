const express = require('express');
const teacherAuthController = require("../controllers/teacherAuth")
const Auth = require('../Authentication/is-auth');
const router = express.Router();
const { Teacher } = require("../models/Teacher");



// router.post('/signup', [

//     check('email')
//         .isEmail()
//         .withMessage('Please enter a valid email')
//         .custom((value, { req }) => {
//             return Teacher.findOne({ email: value })
//                 .then(user => {
//                     if (user) {
//                         return Promise.reject('Email already exists!');
//                     }
//                 })
//         }),

//     check('password')
//         .trim()
//         .isLength({ min: 5 }),

//     check('name')
//         .trim()
//         .not()
//         .isEmpty()

// ], teacherAuthController.signup);

router.post('/login', teacherAuthController.login);

router.post('/signup/otp', teacherAuthController.otpVerification);
router.post('/signup/resetOtp', teacherAuthController.resetPassword);
router.post('/signup/otp-resend', teacherAuthController.resendOtp)
router.post('/signup/checkOtp', teacherAuthController.resetOtpVerification);
router.post('/signup/reset-password', teacherAuthController.newPassword);


// Fetching access Token using refresh token
router.post("/auth/token/", Auth.GetnewAccessToken);


module.exports = router;
