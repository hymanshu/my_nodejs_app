var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();
router.get('/',function(req,res){
  res.json({"error" : false, "message" : "Hello World!"});
});
router.post('/add',function(req,res){
  res.json({"error" : false, "message" : "success", "data" :  parseInt(parseInt(req.body.num1) + parseInt(req.body.num2))});
});
app.use('/',router);
app.listen(80,function(){
  console.log("Listening at PORT 80");
})
