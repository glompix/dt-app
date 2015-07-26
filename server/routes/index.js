var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/employers', function(req, res) {
  res.json({ employers: [
    { name: 'GoDaddy' },
    { name: 'Microsoft' },
    { name: 'Yahoo!' },
    { name: 'Facebook' },
    { name: 'Amazon' }
  ] });
});

module.exports = router;
