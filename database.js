const bcrypt = require("bcrypt");

const users = [];

function getUserByEmail(email) {
  return users.find((user) => user.email === email);
}

function registerUser(user) {
  //Checking the case if email is used
  if (getUserByEmail(user.email)) {
    console.log("Email is already in use!");
    return null;
  }

  users.push({
    id: Math.random(),
    email: user.email,
    password: bcrypt.hashSync(user.password, 10),
    role: user.role,
  });
}

function loginUser(email, password) {
  const user = getUserByEmail(email);
  if (user && bcrypt.compareSync(password, user.password)) {
    return user;
  }
  return null;
}

module.exports = {
  users,
  loginUser,
  getUserByEmail,
  registerUser,
};
