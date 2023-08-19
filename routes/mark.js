'use strict'

var express = require('express');
var MarkController = require('../controllers/mark');

var router = express.Router();

// router.get('/home',ProjectController.home);
router.get('/test',MarkController.test);
// router.post('/save-project',ProjectController.saveProject); //http://localhost:3700/api/save-project //Body - x-www-form-urlencoded

module.exports = router;



