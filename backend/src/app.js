require("dotenv").config();
const cors = require("cors");
const express = require("express");
const userRoutes = require("../routes/userRoutes");
const todoRoutes = require("../routes/todoRoutes");
const passport = require("passport");
const connectDB = require("../db/database");

connectDB();

const PORT = process.env.PORT;

const app = express();

const logger = (req, res, next) => {
  next();
};

app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.get("/test", (req, res) => {
  res.status(201).send("Test");
});

app.use("/auth", userRoutes);
app.use("/todos", todoRoutes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
