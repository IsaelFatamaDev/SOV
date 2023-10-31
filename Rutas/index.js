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


