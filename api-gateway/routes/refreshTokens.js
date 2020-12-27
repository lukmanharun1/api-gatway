const express = require('express');
const router = express.Router();
const refreshHandler = require('./handler/refresh-tokens'); 

router.post('/', refreshHandler.refreshToken);

module.exports = router;
