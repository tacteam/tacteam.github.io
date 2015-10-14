
angular.module('boilerplate')

.service('services.etiqueta', [
  'storage',
  function(storage){
    
    var etiquetas = storage.get('etiquetas');
    
    var change = function(){
      storage.set('etiquetas', etiquetas);
    };
    
    // var e = [
     // {name:"verduras", color:"verde", productos:["tomate", "papas"]},
     // {name:"almacen", color:"rojo", productos:["aceite"]},
     // {name:"lacteos"}
    // ];
    // storage.set('etiquetas', e);
    
    return{
      all: function(){
        return etiquetas;
      },
      save: function(etiqueta){
        if(!etiqueta || !etiqueta.name || etiqueta.name == ''){
          return false;
        }
        if(etiquetas.indexOf(etiqueta) != -1){
          var index;
          for(index = 0; index < etiquetas.length; index ++){
            if(etiquetas[index].name == etiqueta.name){
              return false;
            }
          }
        }
        etiquetas.push(etiqueta);
        change();
        return true;
      },
      remove: function(etiqueta){
        var item_index = etiquetas.indexOf(etiqueta);
        if(item_index == -1){
          return false;
        }
        etiquetas.splice(item_index, 1);
        change();
        return true;
      }
    };
  }
]);