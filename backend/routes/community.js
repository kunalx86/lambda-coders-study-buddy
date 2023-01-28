const communityController = require("../controllers/community");
const express = require("express");
const router = express.Router();
const Auth = require("../Authentication/is-auth");

router.post("/joinCommunity", Auth.authentication, communityController.joinCommunity);


module.exports = router;