require("dotenv").config();
const express = require("express");
const userControllers = require("../controllers/userController");

const router = express.Router();

router.post("/login", userControllers.authUser);
router.post("/health", userControllers.health);
router.route("/register").post(userControllers.registerUser);

module.exports = router;
