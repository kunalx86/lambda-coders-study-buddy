const testController = require("../controllers/test");
const express = require("express");
const router = express.Router();
const Auth = require("../Authentication/is-auth");


router.get("/test/:test", Auth.authentication, testController.getTest);
router.post("/test/submitTest", Auth.authentication, testController.submitTest)

module.exports = router;