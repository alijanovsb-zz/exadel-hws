require("dotenv").config();
const cors = require("cors");
const express = require("express");
const login = require("./data/login");
const register = require("./data/register");
const limits = require("./data/limits");
const usersRouter = require("./data/users");
const incomeRouter = require("./data/incomes");
const expenseRouter = require("./data/expenses");
const expenseCategoryRouter = require("./data/expensesCategory");
const passport = require("passport");
// const { jwtCallback } = require("./passport");
// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;

const PORT = process.env.PORT;

const app = express();

const logger = (req, res, next) => {
  next();
};

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

// const opts = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.JWT_SECRET,
// };

// passport.use(new JwtStrategy(opts, jwtCallback));

// const auth = passport.authenticate("jwt", { session: false });

app.use("/login", login);
app.use("/limit", limits);
app.use("/register", register);
app.use("/users", usersRouter);
app.use("/income", incomeRouter);
app.use("/expense", expenseRouter);
app.use("/expenseCategory", expenseCategoryRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
