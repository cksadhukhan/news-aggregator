const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { getUsers, addUser, updateUser } = require("../helpers");
const { UserValidator } = require("../utils");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = {
      email,
      password,
    };
    if (UserValidator.validateLoginDetails(userData).status) {
      const users = getUsers();
      const user = users.find((user) => user.email === userData.email);

      if (!user) {
        return res.status(401).json({ error: "Email not registered" });
      }
      const match = await bcrypt.compare(userData.password, user.password);
      if (!match) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      const token = jwt.sign({ email }, "secret", { expiresIn: 86400 });

      res.json({ token, message: "Sucessfully logged in" });
    } else {
      let message = UserValidator.validateLoginDetails(userData).message;
      return res.status(400).json({ message });
    }
  } catch (error) {
    console.error("Error while logging:", error);
    res.status(500).json({ error: "Login Failed" });
  }
};

exports.register = async (req, res) => {
  try {
    let users = [];
    const { name, email, password, preferences } = req.body;
    const userData = {
      name,
      email,
      password,
      preferences,
    };
    if (UserValidator.validateSignupDetails(userData).status) {
      users = getUsers(userData);
      if (users.some((user) => user.email === userData.email)) {
        return res.status(400).json({ error: "Username already exists" });
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const user = {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        preferences: userData.preferences ?? [],
      };

      addUser(user);

      res.json({ message: "User registered successfully" });
    } else {
      let message = UserValidator.validateSignupDetails(userData).message;
      return res.status(400).json({ message });
    }
  } catch (error) {
    console.error("Error registering user: ", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

exports.getPreferences = (req, res) => {
  try {
    const { email } = req.user;
    const users = getUsers();
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    res.json({ preferences: user.preferences });
  } catch (error) {
    console.error("Error retrieving preferences:", error);
    res.status(500).json({ error: "Failed to retrieve preferences" });
  }
};

exports.updatePreferences = (req, res) => {
  try {
    const { email } = req.user;
    const { preferences } = req.body;
    const data = {
      preferences,
    };
    if (UserValidator.validatePreferencesInput(data).status) {
      const users = getUsers();
      const idx = users.findIndex((user) => user.email === email);
      if (idx === -1) {
        return res.status(404).json({ error: "User not found" });
      }
      updateUser(data.preferences, idx);
      res.json({ message: "Preferences updated successfully" });
    } else {
      const message = UserValidator.validatePreferencesInput(data).message;
      return res.status(400).send({ message });
    }
  } catch (error) {
    console.log("Error while updating preferences: " + error);
    res.status(500).json({ error: "Internal server error" });
  }
};
