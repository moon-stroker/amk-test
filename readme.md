# Boilerplate with Gulp + PostCSS&css-next + Babel

Este es un starter pack para iniciar proyectos con una estructura simple y sencilla usando ECS6 y PostCSS  

## Instalación

En la terminal

```javascript
npm i -D
```

## Estructura de carpetas  
```
├── css/
│   ├── main.css
├── js/
│   ├── bundle.js
│   ├── vendors.js
├── fonts/
├── images/
├── source/
│   ├── css
│   │   ├── components/
│   │   │   ├── fonts.css
│   │   │   ├── general.css
│   │   ├── vendor/
│   │   ├── main.css
│   ├── js
│   │   ├── components/
│   │   │   ├── ConsoleDebug.js
│   │   ├── vendor/
│   │   ├── main.js
```
Los archivos de desarrolo en post css y js, están alojados dentro de la carpeta source.

# Ejecutar
Consta de dos configuraciones básicas para desarrollo y producción

### Desarrollo

En la terminal

```javascript
gulp serve
```

Esto arrancará un servidor node, el cual cuenta con un browserSync que permitira que todos los cambios realizados se refresquen automaticamente en el navegador. Además transformará los postCss a un solo main.css, asi como los archivos js en un "bundle.js" y unificará todos los scripts dentro de la carpeta vendor en un archivo "vendors.js"

### Producción

En la terminal

```javascript
gulp
```

Realizará las mismas tareas de unificación y compilación,  además de minificarlos

