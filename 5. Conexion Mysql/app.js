var express = require("express");
var mysql = require("mysql");
var app = express();


app.use(express.json());
app.use(cors());

var con = mysql.createConnection({
      host: "localhost",
      user: "fatama",
      password: "admin",
      database: ""
});

con.connect(function (err) {
      if (err) throw err;
      console.log("Conectado!");
});
