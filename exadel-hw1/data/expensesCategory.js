const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("[GET from /expensesCategory.js]");
});

router.post("/", (req, res) => {
  res.send("[POST from /expensesCategory.js]");
});

router.delete("/", (req, res) => {
  res.send("[DELETE from /expensesCategory.js]");
});

router.patch("/", (req, res) => {
  res.send("[PATCH from /expensesCategory.js]");
});

module.exports = router;
