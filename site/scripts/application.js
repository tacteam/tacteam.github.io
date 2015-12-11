(function() {
    'use strict';
    angular.module('application').run([
        'tac.keys', 'tac.history', 'tac.keyboard', 'application.configuration',
        function(keys, history, keyboard, config) {
            keyboard.set_assets_path(config.tac_keyboard_assets);
            keys.bind_keydown(document);
            return history.initialize();
        }
    ]).factory('application.configuration', [
        'application.environment',
        function(app_env) {
            return {
                tac_keyboard_assets: app_env.tac_keyboard_assets
            };
        }
    ]).constant('application.events').config([
        '$httpProvider',
        function($httpProvider) {

            /*
            hardcoded login 
            user     = 'username'
            password = 'password'
            $httpProvider.defaults.headers.common.Authorization = 'Basic ' + btoa( user + ':' + password)
             */
        }
    ]);

}).call(this);
