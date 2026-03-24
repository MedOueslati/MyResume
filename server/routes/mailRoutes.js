const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/mailController");

// POST /api/send-email
router.post("/", sendEmail);

module.exports = router;
