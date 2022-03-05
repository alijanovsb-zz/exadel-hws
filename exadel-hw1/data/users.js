const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("[GET from /users.js]");
});

router.get("/:id", (req, res) => {
  res.send(`[GET requested user:] ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("[POST from /users.js]");
});

router.delete("/", (req, res) => {
  res.send("[DELETE from /users.js]");
});

router.patch("/", (req, res) => {
  res.send("[PATCH from /users.js]");
});

router.patch("/:id", (req, res) => {
  res.send(`[PATCH requested user:] ${req.params.id}`);
});

module.exports = router;
