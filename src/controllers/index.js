const {
  login,
  signup,
  getPreferences,
  updatePreferences,
} = require("./user.controller");
const { getNews } = require("./news.controller");

module.exports = {
  login,
  signup,
  getNews,
  getPreferences,
  updatePreferences,
};
