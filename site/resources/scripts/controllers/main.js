'use strict';

angular.module('boilerplate')

.controller('view.main.controller', [
  '$scope',
  'services.producto',
  'services.etiqueta',
  'services.color',
  function($scope, producto, etiqueta, color){
    
    
    var panel = function(etiqueta, productos){
      var productos_de_etiqueta = [];
      if(etiqueta.productos && etiqueta.productos.length){
        for(var index = 0; index < productos.length; index++){
          var producto = productos[index];
          if(etiqueta.productos.indexOf(producto.name) != -1){
            productos_de_etiqueta.push(producto);
          }
        }
      }
      return {
        etiqueta: etiqueta,
        productos: productos_de_etiqueta
      };
    };
    
    var paneles = function(){
      var etiquetas = etiqueta.all();
      var productos = producto.all();
      var colores = color.all();
      
      var paneles = [];
      for(var index = 0; index < etiquetas.length; index++){
        paneles.push(panel(etiquetas[index], productos));
      }
      return paneles;
    };
    
    console.log('view.main.controller' + ' initialize');

    $scope.paneles = paneles();

  }
]);
