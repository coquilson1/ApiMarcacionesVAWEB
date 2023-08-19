'use strict'

const { exit } = require('process');
//const marcacion = require('./models/marcacion');
//var Marcacion = require('./models/marcacion');

var controller = {

    test: function(req,res){
        return res.status(200).send({
            message: 'Test Controller Success'
        });
    }
}

module.exports = controller;