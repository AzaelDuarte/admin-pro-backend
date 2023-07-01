const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

const cors = require('cors');


//crear servidor de express
const app = express();

//configurar cors
app.use(cors());

//Lectura y parseop del body
app.use(express.json());

//base de datos
dbConnection();

//mean_user
    //w45EtzS48ZV4YfFW

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});