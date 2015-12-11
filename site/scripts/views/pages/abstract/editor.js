(function() {
    'use strict';
    angular.module('application').controller('page.abstract.editor', [
        '$scope', 'tac.navigable.modal', 'producto', 'etiqueta', 'color', 'common',
        function($scope, modal, productoR, etiquetaR, colorR, commonS) {
            return $scope.modificar_producto = function(container) {
                var $modalInstance, producto;
                producto = container.producto;
                $modalInstance = modal.open({
                    windowClass: 'create-dialog',
                    templateUrl: 'site/views/modals/producto/modify.html',
                    controller: 'modal.producto.modify',
                    backdrop: 'static',
                    resolve: {
                        container: function() {
                            return container;
                        }
                    }
                });
                return $modalInstance.result.then(function() {
                    if (container.producto) {
                        productoR.save(container.producto);
                    } else {
                        productoR.remove(producto);
                    }
                    return $modalInstance.result;
                });
            };
        }
    ]);

}).call(this);
