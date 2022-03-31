const User = require("../../models/userModel");
const connectDB = require("../database");
const users = require("../users");

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();

    await User.insertMany(users);

    console.log("Data imported");
    process.exit(1);
  } catch (error) {
    console.error(error);
  }
};

importData();
