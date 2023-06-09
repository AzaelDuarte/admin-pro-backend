const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

const cors = require('cors');


//crear servidor de express
const app = express();

//configurar cors
app.use(cors());

//base de datos
dbConnection();

//Rutas
app.get('/', (req, res) => {

    //mean_user
    //w45EtzS48ZV4YfFW

    res.json(
        {
            ok: true,
            msg: 'Hola mundo'
        }
    );

});


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});