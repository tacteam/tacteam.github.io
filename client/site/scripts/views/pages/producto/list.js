(function() {
    'use strict';
    angular.module('application').controller('page.producto.list', [
        '$scope', '$controller', 'producto', 'etiqueta', 'color', 'common',
        function($scope, $controller, productoR, etiquetaR, colorR, commonS) {
            var container_by_name, filter, make_active, mk_containers, order_by_name, producto_by_name, remove;
            $controller('page.abstract.editor', {
                $scope: $scope
            });
            $scope.selected = {};
            make_active = function(removed) {
                var container, _i, _len, _ref;
                _ref = $scope.containers;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    container = _ref[_i];
                    if (container.producto !== removed.producto) {
                        return $scope.selected.producto = container.producto;
                    }
                }
            };
            producto_by_name = function(a, b) {
                return commonS.compare(a.name, b.name);
            };
            container_by_name = function(a, b) {
                return commonS.compare(a.producto.name, b.producto.name);
            };
            order_by_name = false;
            $scope.ordenar_por_nombre = function() {
                if (!order_by_name) {
                    order_by_name = true;
                    return mk_containers();
                }
            };
            $scope.ordenar_por_categoria = function() {
                if (order_by_name) {
                    order_by_name = false;
                    return mk_containers();
                }
            };
            $scope.criteria = {
                text: ''
            };
            filter = $scope.criteria.text;
            $scope.filter = function() {
                var container, _i, _len, _ref, _results;
                if (filter === $scope.criteria.text) {
                    return false;
                }
                filter = $scope.criteria.text;
                _ref = $scope.containers;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    container = _ref[_i];
                    _results.push(container.producto.hidden = container.producto.name.indexOf(filter) === -1);
                }
                return _results;
            };
            remove = function(collection, elem) {
                var elem_index;
                elem_index = collection.indexOf(elem);
                if (elem_index > -1) {
                    return collection.splice(elem_index, 1);
                }
            };
            mk_containers = function() {
                var categoria, etiqueta, producto, _i, _j, _len, _len1, _ref, _ref1;
                $scope.categorias = [];
                $scope.containers = [];
                _ref = etiquetaR.all();
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    etiqueta = _ref[_i];
                    categoria = {
                        productos: productoR.get_by_etiqueta(etiqueta).sort(producto_by_name),
                        etiqueta: etiqueta,
                        color: colorR.get_by_id(etiqueta.color_id)
                    };
                    $scope.categorias.push(categoria);
                    _ref1 = categoria.productos;
                    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                        producto = _ref1[_j];
                        $scope.containers.push({
                            producto: producto,
                            categoria: categoria
                        });
                    }
                }
                if (order_by_name) {
                    return $scope.containers.sort(container_by_name);
                }
            };
            mk_containers();
            return $scope.modificar = function(container) {
                var edit;
                edit = {
                    producto: container.producto,
                    categoria: container.categoria,
                    categorias: $scope.categorias
                };
                return $scope.modificar_producto(edit).then(function() {
                    if (edit.producto) {
                        if (edit.categoria !== container.categoria) {
                            return container.categoria = edit.categoria;
                        }
                    } else {
                        make_active(container);
                        return remove($scope.containers, container);
                    }
                });
            };
        }
    ]);

}).call(this);
