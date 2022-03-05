const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("[GET] from /limits.js");
});

router.get("/:id", (req, res) => {
  res.send(`[GET] limit with id: ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("[POST] from /limits.js");
});

router.delete("/:id", (req, res) => {
  res.send(`[DELETE] limit with id: ${req.params.id}`);
});

module.exports = router;
