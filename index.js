require('dotenv').config();

const chalk = require('chalk');
const express = require('express');
const cors = require('cors');
var path = require ('path');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );

//app.use(cors({origin: true, credentials:true},{maxHttpHeaderSize:true}))
//app.use(express.static(path.join(__dirname,'client')))

// Lectura y parseo del body
app.use( express.json() );
dbConnection();

app.use('/perfiles', require('./routes/perfiles.routes'));

app.listen( process.env.PORT, () => {
    console.log(chalk.bgYellow.black.bold('Servidor funcionando en el puerto :' + process.env.PORT));
});