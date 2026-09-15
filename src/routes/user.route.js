const express = require("express");
const router = express.Router();
const {emailSent} = require("../controllers/user")
const {register} = require("../middelware/validation")

router.post("/register", register, emailSent)

module.exports = router;