const express = require("express");
const usersRouter = require("./data/users");
const incomeRouter = require("./data/incomes");
const expenseRouter = require("./data/expenses");
const expenseCategoryRouter = require("./data/expensesCategory");
const limits = require("./data/limits");
const app = express();

const logger = (req, res, next) => {
  next();
};

app.use(logger);
app.use(express.json());

app.use("/users", usersRouter);
app.use("/income", incomeRouter);
app.use("/expense", expenseRouter);
app.use("/expenseCategory", expenseCategoryRouter);
app.use("/limit", limits);

app.listen(3000, () => console.log("Listening"));
