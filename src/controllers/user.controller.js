// In-memory data store

exports.login = (req, res) => {
  res.json({ message: "Login User" });
};

exports.register = (req, res) => {
  res.json({ message: "Register User" });
};

exports.getPreferences = (req, res) => {
  res.json({ message: "Get Preferences" });
};

exports.updatePreferences = (req, res) => {
  res.json({ message: "Update Preferences" });
};
