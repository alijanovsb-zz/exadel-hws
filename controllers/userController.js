require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

//@route POST /auth/login
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({
      id: user.id,
      email: user.email,
      role: user.role,
      token: `Bearer ${token}`,
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = authUser;
