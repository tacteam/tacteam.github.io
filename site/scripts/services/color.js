(function() {
    'use strict';
    angular.module('application').service('color', [
        'storage',
        function(storage) {
            var change, color_service, colores;
            colores = storage.get('colores');
            change = function() {
                return storage.set('colores', colores);
            };
            color_service = {
                generate: function() {
                    colores = [{
                        id: 0,
                        name: "verde",
                        frame: {
                            border: '#0A0'
                        },
                        etiqueta: {
                            bg: '#7CFC00',
                            text: '#090',
                            selected: '#03C03C'
                        },
                        producto: {
                            bg: '#03C03C',
                            text: '#FFF',
                            selected: '#090'
                        }
                    }, {
                        id: 1,
                        name: "rojo",
                        frame: {
                            border: '#F00'
                        },
                        etiqueta: {
                            bg: '#FF8D87',
                            text: '#F00',
                            selected: '#F00'
                        },
                        producto: {
                            bg: '#F00',
                            text: '#FFF',
                            selected: '#F88'
                        }
                    }, {
                        id: 2,
                        name: "amarillo",
                        frame: {
                            border: '#ACAC56'
                        },
                        etiqueta: {
                            bg: '#FFFF00',
                            text: '#7A7A49',
                            selected: '#ACAC56'
                        },
                        producto: {
                            bg: '#FFFF00',
                            text: '#7A7A49',
                            selected: '#ACAC56'
                        }
                    }, {
                        id: 3,
                        name: "azul",
                        frame: {
                            border: '#00F'
                        },
                        etiqueta: {
                            bg: '#6495ED',
                            text: '#00F',
                            selected: '#00F'
                        },
                        producto: {
                            bg: '#6495ED',
                            text: '#FFF',
                            selected: '#00F'
                        }
                    }];
                    return change();
                },
                all: function() {
                    return colores;
                },
                get_by_id: function(id) {
                    var color, _i, _len;
                    for (_i = 0, _len = colores.length; _i < _len; _i++) {
                        color = colores[_i];
                        if (color.id === id) {
                            return color;
                        }
                    }
                }
            };
            if (!colores) {
                color_service.generate();
            }
            return color_service;
        }
    ]);

}).call(this);
