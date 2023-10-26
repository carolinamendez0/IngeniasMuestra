const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const sequelize = require('./database/connectMysql');

// Setting
const PORT = process.env.PORT || 3000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', function (req, res) {
    res.json("Vista de PELICULAS");
});

app.use('/api', require('./routes/peliculas'));
// http://localhost:3000/api/series
// http://localhost:3000/api/peliculas
// http://localhost:3000/api/buscar?titulo=

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arranado en http://localhost:${PORT}`);

    // Conectase a la base de datos
    // Force true: DROP TABLES
    // sequelize.sync({ force: false }).then(() => {
    //     console.log("Nos hemos conectado a la base de datos");
    // }).catch(error => {
    //     console.log('Se ha producido un error', error);
    // })

});