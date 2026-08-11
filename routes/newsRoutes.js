const express = require('express');
const getNews = require('../controller/controller');
const router = express.Router();


// Example route for news
router.get('/getNews', getNews);


module.exports = router;