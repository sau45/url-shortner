const express = require('express');
const {createShortUrl, redirectUrl} = require('../controller/urlController')
const router = express.Router();

console.log("in router file")

router.post("/shorten", createShortUrl);
router.get("/:shortId",redirectUrl)
module.exports = router;