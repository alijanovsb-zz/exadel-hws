require("dotenv").config();
const express = require("express");
const auth = require("../auth");
const todoControllers = require("../controllers/todoController");

const router = express.Router();

router.get("/getTodos", auth, todoControllers.getTodos);
router.post("/editTodo/:id", auth, todoControllers.editTodo);
router.post("/createTodo", auth, todoControllers.createTodo);
router.post("/deleteTodo/:id", auth, todoControllers.deleteTodo);

module.exports = router;
