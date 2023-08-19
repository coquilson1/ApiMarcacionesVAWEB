'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3701;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/vaweb")
    .then(() => {
        console.log("Conexion a la BD vaweb exitosa");

        app.listen(port, () => {
            console.log("Servidor corriendo correctamente en la URL: localhost:3701");
        });

    })
    .catch((err) => console.log(err));
