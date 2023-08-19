'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarcacionSchema = Schema({
    test: String,
    testS: String
})

module.exports = mongoose.model('Marcacion',MarcacionSchema)