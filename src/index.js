/* Este archivo es para arrancar nuestro servidor */

const express = require('express');
const path = require('path'); //modulo que ya viene con nodejs
const exphbs = require('express-handlebars'); //mootor de plantillas
const methodOverride = require('method-override');
const session = require('express-session');

//Initializations
const app = express();  //objeto guardado en variable app

//Settings - Todas las configuraciones
app.set('port', process.env.PORT || 3000); //Si existe un puerto que lo tome(servicios en la nube), sino usar el 3000
app.set('views', path.join(__dirname, 'views')); //join permite concatenar rutas. Esto sirve para indicarle a node que la carpeta views está dentro de src.
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname: '.hbs'
})); // Definir nuestro motor de plantillas
app.set('view engine', '.hbs');

//Middlewares - Funciones a ser ejecutadas antes que lleguen al servidor, o cuando llegan al servidor, antes que pasarselo a las rutas.
app.use(express.urlencoded({extended: false})); //Cuando un formulario quiera enviarme datos yo pueda entenderlo.
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true,
}));

//Global variables - Datos que queremos que seana ccesibles en toda la aplicación.

//Routes - Rutas

//Static Files - Configurar dónde estaran ubicados los archivos estaticos

//Server is listenning - para iniciar nuestro servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});