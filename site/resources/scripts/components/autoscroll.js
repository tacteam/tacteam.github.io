
angular.module('module.tac.navigable')

.directive('autoScrollContainer', [
  function($parse, EVENTS){
    return {
      link:function(scope, element, attrs){
        element.scrollcontainer = true;
      }
    };
  }
])

.directive('autoScrollVLeaf', [
  '$parse',
  'navigable.events',
  function($parse, EVENTS){
  
    scroll = function(element, container){
      var positionY = (element.offsetTop - element.scrollTop + element.clientTop - 60); // 60 para acomodar el desplazamiento del infobox
      container.scrollTop = positionY;
    };
    
    container = function(element){
      var probe = element.parentNode;
      while(probe.parentNode){
        if(probe.scrollcontainer){
          return probe;
        }
        probe = probe.parentNode;
      }
      if(!probe.scrollcontainer){
        console.log('WARN: cannot get a scroll container');
      }
      return probe;
    };
    
    bind_scroll = function(target, element, container){
      return function(){
        target.navigable.on_active(function(nav){
          scroll(element);
        });
      };
    };
    
    return {
      link: function(scope, element, attrs){
        var target = $parse(attrs.navigableLeafModel)(scope);
        var on_process = bind_scroll(target, element[0], container(element[0]));
        if(scope.navigable_processed){
          on_process();
        }
        else{
          scope.$on(EVENTS.NAVIGABLE_PROCESSED, on_process);
        }
      }
    };
  }  
]);