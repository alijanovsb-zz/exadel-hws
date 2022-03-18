const express = require("express");

const auth = require("../auth");
const { users } = require("../database");
const { adminGuard } = require("../guards");
const router = express.Router();

router.use(auth, adminGuard);

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  res.send(`[GET requested user:] ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send(users);
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
