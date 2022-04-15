require("dotenv").config();
const Todo = require("../models/todoModel");
const asyncHandler = require("express-async-handler");

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.user });

  res.send(todos);
});

const editTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, completed, expiresAt } = req.body;

  const todo = await Todo.findByIdAndUpdate(
    id,
    {
      name,
      description,
      completed,
      expiresAt,
    },
    { new: true }
  );

  res.send(todo);
});

const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findByIdAndDelete(id);

  res.send(todo);
});

const createTodo = asyncHandler(async (req, res) => {
  const { name, description, completed, expiresAt } = req.body;

  const todo = await Todo.create({
    name,
    description,
    completed,
    expiresAt,
    user: req.user,
  });

  res.send(todo);
});

module.exports = { createTodo, getTodos, editTodo, deleteTodo };
