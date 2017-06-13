var express = require("express");
var router = express.Router();

// ideas/
router.get("/", function(req, res){
  res.send("Hello ideas!");
});

module.exports = router;
