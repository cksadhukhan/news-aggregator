const express = require("express");
const {
  login,
  register,
  getPreferences,
  updatePreferences,
} = require("../controllers");
const { verifyToken } = require("../middlewares");

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get("/preferences", verifyToken, getPreferences);

router.put("/preferences", verifyToken, updatePreferences);

module.exports = router;
