const express = require("express");
const {
  login,
  register,
  getPreferences,
  updatePreferences,
} = require("../controllers");

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get("/preferences", getPreferences);

router.put("/preferences", updatePreferences);

module.exports = router;
