
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { dbConection } = require('./database/config');




//crear servidor express
const app = express();


//Base de datos
dbConection();

//Cors
app.use(cors())

//Directorio publico
app.use(express.static('public'));


//lectura y parseo del body
app.use(express.json());



//rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//TODO: CRUD: eventos





//escuchar peticiones
app.listen(4000, ()=>{
    console.log('servidor corriendo en puerto 4000')
});


