var express = require('express');
var router = express.Router();

//数据库链接
var link = require("../server/link");
var blogTbl = require("../server/DB/blog_tbl");
var tagTbl = require("../server/DB/tag_tbl");
var masterTbl = require("../server/DB/master_tbl");

/* GET home page. */
router.get('/', function(req, res, next) {

  blogTbl.findAll({
      where:{}
  }).then(function (result) {
      res.render('index', { title: result[0].title });
  }).catch(function (err) {
      console.log("fail : " + err);
  });


});

module.exports = router;
