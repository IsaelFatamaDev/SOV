var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");


app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "admin",
      database: "sakila"
});


conexion.connect(function (err) {
    if (err) throw err;
    console.log("Conexion exitosa");
});

//MOSTRAR - SELECCIONAR
conexion.query('SELECT * FROM actor;', function (err, result, field) {
    if (err) throw err;
    result.forEach(element => {
          console.log(element);
	console.log("Datos Finalizados");
    });
});


//INSERTAR DATOS
conexion.query('INSERT INTO actor (first_name, last_name) VALUES ("ISAEL", "FATAMA"),("JOSE", "GONZALES"),("MICHAEL", "IBARRA");', function (err, result, field) {
    if (err) throw err;
    console.log("Registro Agregado: ", result);
});
//BORRAR
conexion.query('DELETE FROM actor WHERE actor_id = 204;', function (err, result, field) {
    if (err) throw err;
    console.log("Registro Borrado: ", result);
});


//actualizar
conexion.query('UPDATE actor SET first_name = "PEPITO" WHERE actor_id = 1;', function (err, result, field) {
    if (err) throw err;
    console.log("Registro Actualizado: ", result);
});
