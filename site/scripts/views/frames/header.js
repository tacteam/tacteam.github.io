(function() {
    'use strict';
    angular.module('application').controller('frame.header', [
        '$scope', 'producto', 'etiqueta', 'color',
        function($scope, producto, etiqueta, color) {
            return $scope.generate = function() {
                producto.generate();
                etiqueta.generate();
                return color.generate();
            };
        }
    ]);

}).call(this);
