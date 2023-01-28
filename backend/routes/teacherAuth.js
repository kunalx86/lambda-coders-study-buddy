const express = require('express');
const teacherAuthController = require("../controllers/teacherAuth")
const Auth = require('../Authentication/is-auth');
const router = express.Router();
const { Teacher } = require("../models/Teacher");




router.post('/login', teacherAuthController.login);


// Fetching access Token using refresh token
router.post("/auth/token/", Auth.GetnewAccessToken);


module.exports = router;
