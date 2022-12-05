const express = require("express");
const { displayPage, displayName } = require("../controllers/temp");
const isAuthenticated = require("../middlewares/isAuthenticated");
const router = express.Router();

router
.get('/', isAuthenticated, displayPage)
.get('/:name', isAuthenticated, displayName)

module.exports = router;