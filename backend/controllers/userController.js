require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

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

    const token = generateToken(payload);

    res.status(200).json({
      id: user.id,
      email: user.email,
      role: user.role,
      expiresIn: 1000 * 60 * 10,
      token: `Bearer ${token}`,
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

//@route POST auth/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, age } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User is already exists in system! ");
  }

  const user = await User.create({
    name,
    email,
    password,
    age,
  });

  if (user) {
    const token = generateToken({ user });

    res.status(201).json({
      id: user.id,
      email: user.email,
      role: user.role,
      age: user.age,
      token: `Bearer ${token}`,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const health = asyncHandler(async (req, res) => {
  return res.send({ message: "Health-check is ok" });
});

module.exports = { authUser, registerUser, health };
