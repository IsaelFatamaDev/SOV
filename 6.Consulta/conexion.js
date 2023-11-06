var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");


app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
      host: "localhost",
      user: "isael",
      password: "admin",
      database: "sakila"
});

conexion.connect(function (err) {
      if (err) throw err;
      console.log("Conexion exitosa");
});

conexion.query('SELECT * FROM customer LIMIT 100;', function (err, result, field) {
      if (err) throw err;
      result.forEach(element => {
            console.log(element)
      });
})

conexion.query('SELECT * FROM staff', function (err, result, field) {
      if (err) throw err;
      result.forEach(element => {
            console.log(element)
      });
})


const query = "SHOW TABLES";

conexion.query(query, (err, results) => {
      if (err) {
            console.error("Error al ejecutar la consulta:", err);
            return;
      }

      console.log("Tablas en la base de datos:");
      results.forEach((row) => {
            console.log(row[`Tables_in_${conexion.config.database}`]);
      });

});

conexion.end((err) => {
      if (err) {
            console.error("Error al cerrar la conexión:", err);
      } else {
            console.log("Conexión cerrada.");
      }
});
