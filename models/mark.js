'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarkSchema = Schema({
    test: String,
    testS: String
})

module.exports = mongoose.model('Mark',MarkSchema);