const organizationAuthController = require("../controllers/organizationAuth");
const express = require("express")

const Auth = require('../Authentication/is-auth');
const router = express.Router();

router.post("/login", organizationAuthController.login);


module.exports = router;
