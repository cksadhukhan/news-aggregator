const express = require("express");
const {
  login,
  signup,
  getPreferences,
  updatePreferences,
} = require("../controllers");
const { verifyToken } = require("../middlewares");

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.get("/preferences", verifyToken, getPreferences);

router.put("/preferences", verifyToken, updatePreferences);

module.exports = router;
