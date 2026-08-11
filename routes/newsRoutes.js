const express = require('express');
const getNews = require('../controller/controller');
const router = express.Router();


router.get('/getNews', getNews);

module.exports = router;                                                       