var express = require('express');
var router = express.Router();

const Mail = require('../config/mail');

var d3 = require('d3'),
  jsdom = require('jsdom');

var document = jsdom.jsdom();
  svg = d3.select(document.body).append('svg');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
