const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

router.post("/RegistrationUser", userControllers.register);
router.post("/Login", userControllers.login);

module.exports = router; 