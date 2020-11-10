/* Este archivo es para arrancar nuestro servidor */

const express = require('express');

//Initializations
const app = express();  //objeto guardado en variable app

//Settings - Todas las configuraciones
app.set('port', process.env.PORT || 3000); //Si existe un puerto que lo tome(servicios en la nube), sino usar el 3000

//Middlewares - Funciones a ser ejecutadas antes que lleguen al servidor, o cuando llegan al servidor, antes que pasarselo a las rutas.

//Global variables - Datos que queremos que seana ccesibles en toda la aplicación.

//Routes - Rutas

//Static Files - Configurar dónde estaran ubicados los archivos estaticos

//Server is listenning - para iniciar nuestro servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});