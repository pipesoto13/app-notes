EXPLICACION DE CADA ARCHIVO Y CARPETA
Cada carpeta dentro de 'src' tiene una funcion distinta dentro del servidor:

-views: almacena todos los archivos que vamos a enviar al navegador. Todas las vistas html y/o hechas con motores de vista de plantilas.
-routes: para crear las URLs o rutas de nuestro servidor. Ej: /login , /register , /notes
-public: insertar todos los archivos estaticos que queramos enviar al navegador para pintar en pantalla. Ej: imagenes, fuentes, archivos css, javascrpt
-models: sirve para definir como van a lucir los datos que se van a almacenar en la base de datos. 
        Ej: notas tiene usuario, fecha, nota, titulo. usuario tiene nombre, fecha, correo, contraseña.
-helpers: funciones no escenciales que puede utilizar el servidor o reutlizarse en otra parte.
-config: variables de configuracion, del entorno. Colocar la cofiguracion de autenticacion. Modulos y sus configuraciones.