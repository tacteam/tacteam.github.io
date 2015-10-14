# Guia desarrollo aplicaciones TAC

## Introducción

El dispositivo TAC está diseñado para ejecutar aplicaciones HTML5.
Para facilitar la tarea de desarrollo de aplicaciones, el equipo de tienda TAC utiliza un framework javascript client-side desarrollado por Google llamado AngularJs.

Esta herramienta utiliza jQuery permite separar nuestro sitio en 3 aspectos fundamentales:

* Vistas: El código html que da forma a cada una de las páginas del sitio.
* Controladores: programas que "rellenan" las vistas con los datos de nuestro modelo
* Servicios: programas que proveen los datos que utilizan los controladores para rellenar las vistas

Para mas información [https://angularjs.org](https://angularjs.org/#the-basics)

Para utilizar el framework podemos descargar el código en una carpeta nuestro proyecto y agregar los correspondientes 'imports' en nuestro archivo html general:

```html
<script src="/jquery/jquery.js"></script>
<script src="/angular/angular.js"></script>
```

Otras librerías nos proporcionan implementaciones de componentes comunes:

* localStorage (manejo de memoria del browser)
* underscore (manejo de estructuras en javascript)
* bootstrap (estilos, componentes visuales dinámicos)
* angular-cookies (manejo de cookies)

Para agilizar la descarga de todas las 'depenedencias' se recomienda utilizar [bower](http://bower.io)

### Uso simplificado de Bower

* ejecutar `bower init` en una terminal y seguir lo pasos para configurar nuestro proyecto
* agregar componentes con el comando `bower install nombre_componente --save`
* editar el archivo bower.json para agregar varias dependencias y ejecutar  `bower update` en una terminal

### Convertir la carpeta del proyecto en un sitio web

Existen varios métodos para 'servir' nuestro proyecto. 

* Entorno LAMP (apache)
* PHP server
* Node.js + Express

Ya que varias tecnologías utilizadas en este entorno, como Bower, se basan en [Node.js](https://docs.npmjs.com/getting-started/installing-node) utilizaremos esta opción para servir nuestro sitio.

```shell
npm init
npm install express --save
```

copiar el archivo `server.js` de este proyecto

```shell
node server.js
```

Cualquier browser de nuestro equipo mostrará nuestro sitio en la url [http://localhost:3333](http://localhost:3333)

Addicionalmente se puede editar el archivo `server.js` para modificar el puerto en el que el servidor mostrará nuestra aplicación.

## Componentes TAC

Para simplificar al máximo el desarrollo de aplicaciones, el equipo de desarrollo de TAC creó nuevos componentes Angular.js.

### Historial

Un sitio desarrollado con Angular.js conforma en realidad una aplicacion web.    
Esto significa que la aplicacion tiene un estado global dentro de nuestra pestaña, que va cambiando y generando la sensacion de 'navegación'.    
El compontene ngRoute se encarga de virtualizar el redireccionamiento dentro de los sitios Angular.js.    
Sin embargo, algo que no provee es un manejo sobre el hijstorial de navegación.    
Para solucionar este problema se desarolló el componente 'tac.history' que agrega la funcion de 'volver atras' a las aplicaciones angular, salteando por supuesto aquellas vistas que en realidad no conforman un estado de la aplicación (mensajes de exito o de error, por ejemplo)

documentación: [tac.history](https://github.com/tacteam/history).

### tac.keys












