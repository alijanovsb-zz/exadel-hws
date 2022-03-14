const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("[GET from /income.js]");
});

router.get("/:id", (req, res) => {
  res.send(`[GET] income with id: ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("[POST from /income.js]");
});

router.delete("/", (req, res) => {
  res.send("[DELETE from /income.js]");
});

router.delete("/:id", (req, res) => {
  res.send(`[DELETE] income with id: ${req.params.id}`);
});

router.patch("/", (req, res) => {
  res.send("[PATCH from /income.js]");
});

module.exports = router;
