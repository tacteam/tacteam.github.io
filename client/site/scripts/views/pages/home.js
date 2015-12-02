(function() {
    'use strict';
    angular.module('application').controller('pages.home', [
        '$scope', 'producto', 'etiqueta', 'color',
        function($scope, producto, etiqueta, color) {
            var mk_panel, mk_paneles;
            mk_panel = function(etiqueta, productos) {
                var productos_de_etiqueta, _i, _len;
                productos_de_etiqueta = [];
                if (etiqueta.productos && etiqueta.productos.length) {
                    for (_i = 0, _len = productos.length; _i < _len; _i++) {
                        producto = productos[_i];
                        if (_.contains(etiqueta.productos, producto.name)) {
                            productos_de_etiqueta.push(producto);
                        }
                    }
                }
                return {
                    etiqueta: etiqueta,
                    productos: productos_de_etiqueta
                };
            };
            mk_paneles = function() {
                var colores, etiquetas, paneles, productos, _i, _len;
                etiquetas = etiqueta.all();
                productos = producto.all();
                colores = color.all();
                paneles = [];
                for (_i = 0, _len = etiquetas.length; _i < _len; _i++) {
                    etiqueta = etiquetas[_i];
                    paneles.push(mk_panel(etiqueta, productos));
                }
                return paneles;
            };
            return $scope.paneles = mk_paneles();
        }
    ]);

}).call(this);
