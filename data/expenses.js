const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("[GET from /expenses.js]");
});

router.get("/:id", (req, res) => {
  res.send(`[GET] expense with id: ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("[POST from /expenses.js]");
});

router.delete("/", (req, res) => {
  res.send("[DELETE from /expenses.js]");
});

router.delete("/:id", (req, res) => {
  res.send(`[DELETE] expense with id: ${req.params.id}`);
});

router.patch("/", (req, res) => {
  res.send("[PATCH from /expenses.js]");
});

module.exports = router;
