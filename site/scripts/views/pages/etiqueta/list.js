(function() {
    'use strict';
    angular.module('application').controller('page.etiqueta.list', [
        '$scope', '$controller', 'tac.navigable.modal', 'producto', 'etiqueta', 'color', 'common',
        function($scope, $controller, modal, productoR, etiquetaR, colorR, commonS) {
            var append, by_name, make_active, mk_categoria, mk_categorias, remove;
            $controller('page.abstract.editor', {
                $scope: $scope
            });
            $scope.selected = {};
            by_name = function(a, b) {
                return commonS.compare(a.name, b.name);
            };
            append = function(items, item) {
                var results;
                results = items.slice();
                results.push(item);
                results.sort(by_name);
                return results;
            };
            make_active = function(categoria, removed) {
                var producto, _i, _len, _ref;
                _ref = categoria.productos;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    producto = _ref[_i];
                    if (producto !== removed) {
                        return $scope.selected.producto = producto;
                    }
                }
            };
            remove = function(collection, elem) {
                var elem_index;
                elem_index = collection.indexOf(elem);
                if (elem_index > -1) {
                    return collection.splice(elem_index, 1);
                }
            };
            mk_categoria = function(etiqueta) {
                return {
                    etiqueta: etiqueta,
                    productos: productoR.get_by_etiqueta(etiqueta).sort(by_name),
                    color: colorR.get_by_id(etiqueta.id)
                };
            };
            mk_categorias = function() {
                var etiqueta, _i, _len, _ref, _results;
                _ref = etiquetaR.all();
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    etiqueta = _ref[_i];
                    _results.push(mk_categoria(etiqueta));
                }
                return _results;
            };
            $scope.categorias = mk_categorias();
            $scope.create_producto = function(categoria) {
                var $modalInstance, container;
                container = {
                    etiqueta: categoria.etiqueta,
                    color: categoria.color
                };
                $modalInstance = modal.open({
                    windowClass: 'create-dialog',
                    templateUrl: 'site/views/modals/producto/create.html',
                    controller: 'modal.producto.create',
                    backdrop: 'static',
                    resolve: {
                        container: function() {
                            return container;
                        }
                    }
                });
                return $modalInstance.result.then(function() {
                    if (container.producto) {
                        return categoria.productos = append(categoria.productos, container.producto);
                    }
                });
            };
            return $scope.modificar = function(categoria, producto) {
                var edit;
                edit = {
                    producto: producto,
                    categoria: categoria,
                    categorias: $scope.categorias
                };
                return $scope.modificar_producto(edit).then(function() {
                    if (edit.producto) {
                        if (edit.categoria !== categoria) {
                            make_active(categoria, producto);
                            remove(categoria.productos, producto);
                            return edit.categoria.productos = append(edit.categoria.productos, producto);
                        }
                    } else {
                        make_active(categoria, producto);
                        return remove(categoria.productos, producto);
                    }
                });
            };
        }
    ]);

}).call(this);
