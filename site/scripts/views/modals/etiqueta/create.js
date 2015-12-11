(function() {
    'use strict';
    angular.module('application').controller('modal.etiqueta.create', [
        '$scope', '$modalInstance', 'producto', 'etiqueta', 'container',
        function($scope, $modalInstance, producto, etiqueta, container) {
            $scope.container = container;
            $scope.resume = function() {
                return $modalInstance.dismiss();
            };
            return $scope.confirm = function() {
                return $modalInstance.close();
            };
        }
    ]);

}).call(this);
