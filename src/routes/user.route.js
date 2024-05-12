const express = require("express");
const {
  login,
  register,
  getPreferences,
  updatePreferences,
} = require("../controllers");

const router = express.Router();

router.get("/login", login);

router.get("/register", register);

router.get("/preferences", getPreferences);

router.put("/preferences", updatePreferences);

module.exports = router;
