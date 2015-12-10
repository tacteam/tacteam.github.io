# Guia desarrollo aplicaciones TAC

* [Introducción](#introducción)
* [Uso simplificado de Bower](#uso-simplificado-de-bower)
* [Servir nuestro sitio](#convertir-la-carpeta-del-proyecto-en-un-sitio-web)  
  
* Componentes TAC:
  * [historial (tac.history)](#historial-tachistory)
  * [tac.keys](#tac-keys)
  * [tac.navigable](#tac-navigable)
  * [tac.keyboard](#tac-keyboard)
  * [tac.look.svg](#tac-look-svg)

## Introducción

Este repositorio tiene como objetivo servir de ejemplo de las funcionalidades provistas por los compoenentes TAC.    
Así mismo puede ser utilizado como base para nuevos proyectos.

### Angular.js

El dispositivo TAC está diseñado para ejecutar aplicaciones HTML5.
Para facilitar la tarea de desarrollo de aplicaciones, el equipo de tienda TAC utiliza un framework javascript client-side desarrollado por Google llamado AngularJs.

Esta herramienta utiliza jQuery y permite separar nuestro sitio en 3 aspectos fundamentales:

* **Vistas**: Código html que da forma a cada una de las páginas del sitio.
* **Controladores**: Programas que 'rellenan' las vistas con los datos de nuestro modelo.
* **Servicios**: Programas que proveen los datos que utilizan los controladores para rellenar las vistas.

Para más información [https://angularjs.org](https://angularjs.org/#the-basics).

Para utilizar el framework podemos descargar el código en una carpeta en nuestro proyecto y agregar los correspondientes 'imports' en nuestro archivo html general:

```html
<script src="/jquery/jquery.js"></script>
<script src="/angular/angular.js"></script>
```

Otras librerías nos proporcionan implementaciones de componentes comunes:

* localStorage (manejo de memoria del browser)
* underscore (manejo de estructuras en javascript)
* bootstrap (estilos, componentes visuales dinámicos)
* angular-cookies (manejo de cookies)

Para agilizar la descarga de todas las 'depenedencias' se recomienda utilizar [bower](http://bower.io).

### Uso simplificado de Bower

* ejecutar `bower init` en una terminal y seguir lo pasos para configurar nuestro proyecto.
* agregar componentes con el comando `bower install nombre_componente --save`
* editar el archivo bower.json para agregar varias dependencias y ejecutar  `bower update` en una terminal.

### Convertir la carpeta del proyecto en un sitio web

Existen varios métodos para 'servir' nuestro proyecto. 

* Entorno LAMP (apache)
* PHP server
* Node.js + Express

Ya que varias tecnologías utilizadas en este entorno, como Bower, se basan en [Node.js](https://docs.npmjs.com/getting-started/installing-node), utilizaremos esta opción para servir nuestro sitio.

El archivo `server.js` es una aplicacion express que sirve como contenido estatico el contenido del directorio `client`.

*npm* utiliza la información existente en el archivo `package.json` para descargar las dependencias del proyecto, en este caso solo conseguirá el paquete `express`.

```shell
npm update
```

*Node* es el interprete Javascript server-side que ejecutara al aplicación.

```shell
node server.js 
```

Cualquier browser de nuestro equipo mostrará nuestro sitio en la url [http://localhost:3333](http://localhost:3333).

Addicionalmente se puede editar el archivo `server.js` para modificar el puerto en el que el servidor mostrará nuestra aplicación.

## Componentes TAC

Para simplificar al máximo el desarrollo de aplicaciones, el equipo de desarrollo de TAC creó nuevos componentes Angular.js.

### Historial (**tac.history**)

Un sitio desarrollado con Angular.js conforma en realidad una aplicación web.    
Esto significa que la aplicación tiene un estado global dentro de nuestra pestaña, que va cambiando y generando la sensacion de 'navegación'.    
El componente ngRoute se encarga de virtualizar el redireccionamiento dentro de los sitios Angular.js.    
Sin embargo, algo que no provee es un manejo sobre el historial de navegación.    
Para solucionar este problema se desarolló el componente 'tac.history' que agrega la funcion de 'volver atrás' a las aplicaciones angular, salteando por supuesto aquellas vistas que en realidad no conforman un estado de la aplicación (mensajes de exito o de error, por ejemplo)

**documentación:** [tac.history](https://github.com/tacteam/history).
([en español](https://github.com/tacteam/history/blob/master/documentation.es.md))

### tac.keys

Si bien cada TAC soportará el uso de diferetes interfaces: Teclado, *mouse* e incluso una aplicación *mobile*. Estas constituirán extensiones al método común:    
El control remoto.   
Las aplicaciones TAC podrán interactuar a travez de eventos de teclado.   
Para simplificar la administracion de los eventos, el equipo TAC desarrolló el componente **tac.keys**.    
**tac.keys** administra los eventos de teclado emitidos por el browser, convirtiéndolos en acciones sobre todo aquel que se subscriba al servicio proporcionado.

**documentación:** [tac.keys](https://github.com/tacteam/keys).
([en español](https://github.com/tacteam/keys/blob/master/documentation.es.md))

### tac.navigable

Como comentamos anteriormente, en principio, las aplicaciones deberán ser navegadas utilizando un control remoto.    
El control remoto provee la capacidad de movernos con flechas y ejecutar acciones con botones, por lo que nuestra aplicación, deberá poder ser utilizada con este sistema.    
El equipo TAC, desarrolló un conjunto de componentes que facilita la tarea de convertir un sitio convencional en una aplicación navegable.
**tac.navigable** es util solo en aplicaciones Angular.js, si bien se puede agregar a otro tipo de sitios, no es recomendable.
Cabe aclarar que existen alternativas no dinámicas o menos performantes:

[nekman.keynavigator](http://nekman.github.io/keynavigator)    
[fullscreensitenavigation](http://fullscreensitenavigation.com)    
[deck.js](http://imakewebthings.com/deck.js)    

**tac.navigable** está optimizado para evitar el uso indebido de eventos.    
La mayoría de los sitemas de navegación se basan en jQuery y realizan extensas búsquedas por clase o identificador sobre el arbol DOM para encontrar los nodos seleccionables.
Esto significa que el procesamiento de cada acción consume muchos recursos de la plataforma, cuanto más grande el sitio, más complejo el procesamiento.
**tac.navigable** genera un arbol virtual de navegación, vinculando los nodos como padres e hijos, de esta forma, para procesar una acción, solo debe subir y bajar niveles en busca del siguiente nodo disponible, lo que implica un procesamiento mínimo.

**documentación:** [tac.navigable](https://github.com/tacteam/navigable).
([en español](https://github.com/tacteam/navigable/blob/master/documentation.es.md))

### tac.keyboard

Teclado virtual dinámico navegable por control remoto.
Permite editar los *inputs* de nuestra página con solo agregar un atributo a nuestro html.
Dispone de teclado qwerty navegable por flechas y otro T9 con tipeo repetitivo sobre el *numpad*.

**documentación:** [tac-keyboard](https://github.com/tacteam/keyboard).
([en español](https://github.com/tacteam/keyboard/blob/master/documentation.es.md))

### tac.look.svg

Este componente permite inyectar dentro de un elemento DOM el contenido de un archivo svg obtenido dinámicamente.

**documentación:** [tac.look.svg](https://github.com/tacteam/look-svg).
([en español](https://github.com/tacteam/look-svg/blob/master/documentation.es.md))

