var express = require('express');
var router = express.Router();
var data = require("../data/data.js")
    /* GET home page. */
    // router.get('/', function(req, res, next) {
    //     res.render('index', { title: 'Express' });
    // });
router.get('/api/data', function(req, res, next) {
    res.end({ code: 1, msg: data });
});
module.exports = router;