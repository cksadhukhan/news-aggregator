const loggerMiddleware = require("./logger.middleware");
const verifyToken = require("./auth.middleware");

module.exports = {
  loggerMiddleware,
  verifyToken,
};
