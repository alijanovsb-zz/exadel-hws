const { mongoose } = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    process.exit(1);
  }
};

module.exports = connectDB;
