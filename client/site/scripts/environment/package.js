(function() {
    'use strict';
    angular.module('application').factory('application.environment', [
        function() {
            console.log('package environment');
            return {
                name: 'package',
                tac_keyboard_assets: 'bower_components/tac-keyboard/dist'
            };
        }
    ]);

}).call(this);
