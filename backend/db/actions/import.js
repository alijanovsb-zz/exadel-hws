const connectDB = require("../database");
const User = require("../../models/userModel");
const Todo = require("../../models/todoModel");
const users = require("../users");
const todos = require("../todos");

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Todo.deleteMany();

    await User.insertMany(users);
    await Todo.insertMany(todos);

    console.log("Data imported");
    process.exit(1);
  } catch (error) {
    console.error(error);
  }
};

importData();
