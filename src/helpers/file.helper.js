const fs = require("fs");

const USERS_FILE_PATH = "./users.json";

const addUser = (user) => {
  let users = [];
  if (fs.existsSync(USERS_FILE_PATH)) {
    const data = fs.readFileSync(USERS_FILE_PATH);
    users = JSON.parse(data);
  }

  users.push(user);

  fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 2));
};

const getUsers = () => {
  if (fs.existsSync(USERS_FILE_PATH)) {
    const data = fs.readFileSync(USERS_FILE_PATH);
    return JSON.parse(data);
  } else {
    return [];
  }
};

const updateUser = (preferences, index) => {
  let users = [];
  if (fs.existsSync(USERS_FILE_PATH)) {
    const data = fs.readFileSync(USERS_FILE_PATH);
    users = JSON.parse(data);
  }

  users[index].preferences.push(...preferences);

  fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 2));
};

module.exports = {
  addUser,
  getUsers,
  updateUser,
};
