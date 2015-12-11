(function() {
    'use strict';
    angular.module('application').service('etiqueta', [
        'storage',
        function(storage) {
            var change, etiqueta_service, etiquetas;
            etiquetas = storage.get('etiquetas');
            change = function() {
                return storage.set('etiquetas', etiquetas);
            };
            etiqueta_service = {
                generate: function() {
                    etiquetas = [{
                        id: 0,
                        name: 'verduras',
                        color_id: 0
                    }, {
                        id: 1,
                        name: 'almacen',
                        color_id: 1
                    }, {
                        id: 2,
                        name: 'lacteos',
                        color_id: 2
                    }, {
                        id: 3,
                        name: 'higiene',
                        color_id: 3
                    }];
                    return change();
                },
                all: function() {
                    return etiquetas;
                },
                save: function(item) {
                    var etiqueta, _i, _len;
                    if (!item || !item.name || item.name === '') {
                        return false;
                    }
                    if (!_.contains(etiquetas, item)) {
                        for (_i = 0, _len = etiquetas.length; _i < _len; _i++) {
                            etiqueta = etiquetas[_i];
                            if (etiqueta.name === item.name) {
                                return false;
                            }
                        }
                        etiquetas.push(item);
                    }
                    change();
                    return item;
                },
                remove: function(item) {
                    var item_index;
                    item_index = etiquetas.indexOf(item);
                    if (item_index !== -1) {
                        etiquetas.splice(item_index, 1);
                        return change();
                    }
                }
            };
            if (!etiquetas) {
                etiqueta_service.generate();
            }
            return etiqueta_service;
        }
    ]);

}).call(this);
