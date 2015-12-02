(function() {
    'use strict';
    angular.module('application').controller('modal.producto.modify', [
        '$scope', '$modalInstance', 'container',
        function($scope, $modalInstance, container) {
            $scope.container = container;
            $scope.producto = {
                name: container.producto.name,
                disable: container.producto.disable
            };
            $scope.resume = function() {
                return $modalInstance.dismiss();
            };
            $scope.modify = function() {
                container.producto.name = $scope.producto.name;
                container.producto.disable = $scope.producto.disable;
                return $modalInstance.close();
            };
            return $scope.remove = function() {
                delete container.producto;
                return $modalInstance.close();
            };
        }
    ]);

}).call(this);
