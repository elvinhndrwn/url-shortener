const express = require("express");
const router = express.Router();
const { shortenUrl, redirectUrl } = require("../controllers/urlController");

// Route untuk membuat short URL
router.post("/shorten", shortenUrl);

// Route untuk redirect dari short URL
router.get("/:shortCode", redirectUrl);

module.exports = router;
