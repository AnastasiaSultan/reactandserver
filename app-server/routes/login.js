var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:login/:password', function(req, res, next) {
  console.log(req.params.login,req.params.password)
  if (req.params.login === '1' && req.params.password === '2'){
    res.status(200) 
    res.end()
  }else{
    res.status(304)
    res.end()
  }
});

module.exports = router;
