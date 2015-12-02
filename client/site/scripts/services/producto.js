(function() {
    'use strict';
    angular.module('application').service('producto', [
        'storage',
        function(storage) {
            var change, producto_service, productos;
            productos = storage.get('productos');
            change = function() {
                return storage.set('productos', productos);
            };
            producto_service = {
                all: function() {
                    return productos;
                },
                generate: function() {
                    productos = [{
                        id: 0,
                        etiqueta_id: 0,
                        name: 'zanahoria'
                    }, {
                        id: 1,
                        etiqueta_id: 0,
                        name: 'remolacha'
                    }, {
                        id: 2,
                        etiqueta_id: 0,
                        name: 'acelga'
                    }, {
                        id: 3,
                        etiqueta_id: 0,
                        name: 'espinaca'
                    }, {
                        id: 4,
                        etiqueta_id: 0,
                        name: 'batata'
                    }, {
                        id: 5,
                        etiqueta_id: 0,
                        name: 'zapallo'
                    }, {
                        id: 6,
                        etiqueta_id: 0,
                        name: 'radicheta'
                    }, {
                        id: 7,
                        etiqueta_id: 0,
                        name: 'tomate',
                        disable: true
                    }, {
                        id: 8,
                        etiqueta_id: 0,
                        name: 'papas'
                    }, {
                        id: 9,
                        etiqueta_id: 1,
                        name: 'aceite'
                    }, {
                        id: 10,
                        etiqueta_id: 1,
                        name: 'pan rayado'
                    }, {
                        id: 11,
                        etiqueta_id: 3,
                        name: 'servilletas'
                    }, {
                        id: 12,
                        etiqueta_id: 3,
                        name: 'shampoo'
                    }];
                    return change();
                },
                save: function(item) {
                    var producto, _i, _len;
                    if (!item || !item.name || item.name === '') {
                        return false;
                    }
                    if (!_.contains(productos, item)) {
                        for (_i = 0, _len = productos.length; _i < _len; _i++) {
                            producto = productos[_i];
                            if (producto.name === item.name) {
                                return false;
                            }
                        }
                        productos.push(item);
                    }
                    change();
                    return item;
                },
                get_by_etiqueta: function(etiqueta) {
                    var producto, results, _i, _len;
                    results = [];
                    for (_i = 0, _len = productos.length; _i < _len; _i++) {
                        producto = productos[_i];
                        if (producto.etiqueta_id === etiqueta.id) {
                            results.push(producto);
                        }
                    }
                    return results;
                },
                remove: function(item) {
                    var item_index;
                    item_index = productos.indexOf(item);
                    if (item_index === -1) {
                        return false;
                    }
                    productos.splice(item_index, 1);
                    change();
                    return item;
                }
            };
            if (!productos) {
                producto_service.generate();
            }
            return producto_service;
        }
    ]);

}).call(this);
