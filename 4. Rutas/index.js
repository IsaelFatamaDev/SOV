//* CONSTANTES
const express = require('express')
const app = express();
const port = 3000;
const path = require('path')


app.get('/', (req, res) => {
      res.send('Conexion Node JS');
});

//? Acceso static
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
      console.log(`Se está ejecutando sobre el puerto http://localhost:${port}`);
});

/* 
// TODO: IMPLEMENTACION DE NODE JS - EXPRESS 
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ip = 'localhost';

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
      console.log(`Se está ejecutando sobre el puerto http://${ip}:${port}`);
});

app.get('/inicio.html', function (req, res) {
      var file = path.join(__dirname, '/public/index.html');
      res.sendFile(file);
})
*/