const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json("Hello World from the backend");
});

module.exports = router;
