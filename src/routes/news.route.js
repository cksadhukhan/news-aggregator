const express = require("express");
const { getNews } = require("../controllers");
const { verifyToken } = require("../middlewares");

const router = express.Router();

router.get("/", verifyToken, getNews);

module.exports = router;
