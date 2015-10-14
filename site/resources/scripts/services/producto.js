
angular.module('boilerplate')

.service('services.producto', [
  'storage',
  function(storage){
    
    
    var productos = storage.get('productos');
    
    var change = function(){
      storage.set('productos', productos);
    };
    
    // var p = [
     // {name:"tomate"},
     // {name:"papas"},
     // {name:"aceite"}
    // ];
    // storage.set('productos', p);
    
    return{
      all: function(){
        return productos;
      },
      save: function(producto){
        if(!producto || !producto.name || producto.name == ''){
          return false;
        }
        if(productos.indexOf(producto) != -1){
          //create if name does not exist
          var index;
          for(index = 0; index < productos.length; index ++){
            if(productos[index].name == producto.name){
              return false;
            }
          }
        }
        productos.push(producto);
        change();
        return true;
      },
      remove: function(producto){
        var item_index = productos.indexOf(producto);
        if(item_index == -1){
          return false;
        }
        productos.splice(item_index, 1);
        change();
        return true;
      }
    };
  }
]);