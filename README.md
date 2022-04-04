#   Aplicacion de React V18 CDN TailWind

##  Despliegue en GitHub Pages
    -   Pasos:
    -   1. Preparacion del Proyecto para generar su Build "npm run build" -> Ejecutar Genera un directorio llamado build
        Por defecto nuestra aplicacion debe de correr mediante un servidor "localhost" o servidor empresarial
        *   Podemos hacer pruebas montando un local host con npm install --global http-server ( paquete de node )
    -   2. Desplegar nuestra aplicacion en repositorio de Github o cualquier servicio que ofrezca un servidor privado diferente al protocolo FILE
        *   Asignar Nombre de Docs a la carpeta build
        *   Dentro del repositorio/"nombre de la aplicacion" -> Settings y Buscar la Opcion Github Pages y Activar la Busqueda.
        *   Agregar un punto para ir un nivel atras eg. ->  <link href="/static/css/main.d63a9f26.css" rel="stylesheet"> -> <link href="./static/css/main.d63a9f26.css" rel="stylesheet">