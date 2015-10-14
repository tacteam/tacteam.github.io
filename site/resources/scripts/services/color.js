
angular.module('boilerplate')

.service('services.color', [
  'storage',
  function(storage){
    
    var colores = storage.get('colores');
    
    var change = function(){
      storage.set('colores', colores);
    };
    
    // var c = [
     // {name:"rojo"},
     // {name:"verde"},
     // {name:"azul"},
     // {name:"amarillo"}
    // ];
    // storage.set('colores', c);
    
    return{
      all: function(){
        return colores;
      }
    };
  }
]);