const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
      max: 120,
      required: true,
      validate: {
        validator: (v) => v % 2 === 0,
        message: (prop) => `Age (${prop.value}) must be even`,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "USER",
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.findByEmail = function (email) {
  return this.where({ email: new RegExp(email, "i") }).exec();
};

userSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

userSchema.virtual("namedEmail").get(function () {
  return `${this.name} <${this.email}>`;
});

userSchema.pre("save", function (next) {
  this.edited++;
  next();
});

userSchema.post("save", function (doc) {
  console.log(`${doc.name} has been saved`);
});

module.exports = mongoose.model("User", userSchema);
