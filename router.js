/**
 * Created by quantt on 21/06/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('GET route on things.');
});
router.post('/', function(req, res){
    res.send('POST route on things.');
});
//export this router to use in our index.js
module.exports = router;