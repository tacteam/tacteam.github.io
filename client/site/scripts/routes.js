(function() {
    'use strict';
    angular.module('application').config([
        '$routeProvider',
        function($routeProvider) {
            return $routeProvider.when('/home', {
                templateUrl: 'site/views/pages/home.html',
                controller: 'pages.home'
            }).when('/producto/list', {
                templateUrl: 'site/views/pages/producto/list.html',
                controller: 'page.producto.list'
            }).when('/etiqueta/list', {
                templateUrl: 'site/views/pages/etiqueta/list.html',
                controller: 'page.etiqueta.list'
            }).otherwise({
                redirectTo: '/home'
            });
        }
    ]);

}).call(this);
