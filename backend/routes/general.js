const generalController = require("../controllers/general");
const express = require("express");
const router = express.Router();
const Auth = require("../Authentication/is-auth");

router.get("/me", Auth.authentication, generalController.me);

module.exports = router;