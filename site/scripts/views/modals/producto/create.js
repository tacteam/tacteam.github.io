(function() {
    'use strict';
    angular.module('application').controller('modal.producto.create', [
        '$scope', '$modalInstance', 'producto', 'container',
        function($scope, $modalInstance, productoR, container) {
            $scope.container = container;
            $scope.producto = {};
            $scope.resume = function() {
                return $modalInstance.dismiss();
            };
            return $scope.create = function() {
                var nuevo;
                nuevo = productoR.save({
                    name: $scope.producto.name,
                    etiqueta_id: container.etiqueta.id
                });
                if (nuevo) {
                    container.producto = nuevo;
                    return $modalInstance.close();
                }
            };
        }
    ]);

}).call(this);
