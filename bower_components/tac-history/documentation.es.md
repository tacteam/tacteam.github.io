### Guia de desarrollo TAC

# tac-history

Un sitio desarrollado con Angular.js conforma en realidad una aplicación web.    
Esto significa que la aplicación tiene un estado global dentro de nuestra pestaña, que va cambiando y generando la sensacion de 'navegación'.    
El componente ngRoute se encarga de virtualizar el redireccionamiento dentro de los sitios Angular.js.    
Sin embargo, algo que no provee es un manejo sobre el historial de navegación.    
Para solucionar este problema se desarolló el componente 'tac.history' que agrega la funcion de 'volver atrás' a las aplicaciones angular, salteando por supuesto aquellas vistas que en realidad no conforman un estado de la aplicación (mensajes de exito o de error, por ejemplo)

## Instalación

Este repositorio de distribuye a travez del administrador `bower`. Los fuentes de este módulo se pueden encontrar en el 
[repositorio general tacteam](https://github.com/tacteam/history).
Sientase a gusto de reportar problemas o proponer nuevas *features* en este repositorio

##### Bower

Este módulo puede ser instalado con `bower`.

```shell
bower install tac-history
```

Opcionalmente puede agregar el prefijo --save para agregar la dependencia al archivo bower.js

```shell
bower install tac-history --save
```

Luego agregue el correpondiente tag `<script>` a su `index.html`:

```html
<script src="/bower_components/tac-history/dist/history.js"></script>
```

## Documentación

##### Dependencia Angular

Debe agregar el identificador del componente a las dependencias Angular para que el módulo sea importado dentro de la aplicación.

```js
angular.module('main-application',[
  '...dependencies...',
  'module.tac.history',
  '...dependencies...'
])
```

##### Inicialización del componente

```js
angular.module('main-application')
.run([
  'tac.history', 
  function(history) {
    history.initialize();
  }
])
```

Adicionalmente se pueden pasar expresiones regulares como argumento del método 'initialize' para agregar patrones omitibles.

##### Uso

```js
angular.module('main-application')
.controller('some.controller', [
  '$scope',
  'tac.history', 
  function($scope, history) {
    $scope.go_back_button = function(){
      history.go_back();
    };
  }
])
```


## Licencia

No disponible aún.
