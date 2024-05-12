const {
  login,
  register,
  getPreferences,
  updatePreferences,
} = require("./user.controller");
const { getNews } = require("./news.controller");

module.exports = {
  login,
  register,
  getNews,
  getPreferences,
  updatePreferences,
};
