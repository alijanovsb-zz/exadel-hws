const express = require("express");
const { registerUser } = require("../database");
const router = express.Router();

router.post("/", (req, res) => {
  const { email, password, role } = req.body;
  registerUser({ email, password, role });
  res.send("[POST] from register");
});

module.exports = router;
