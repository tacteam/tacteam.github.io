'use strict';
angular.module('boilerplate').run([
  '$rootScope',
  'tac.keys',
  'tac.history',
  'tac.keyboard',
  'tac.navigable.root.main',
  function($rootScope, keys, history, keyboard, rootMain) {
    keyboard.set_assets_path('bower_components/tac-keyboard/src');
    keys.bind_keydown(document);
    keys.subscribe(rootMain);
    rootMain.bind_to($rootScope);
    history.initialize();
  }
])
.constant('EVENTS', {
  CONTENT_VISIBLE: 'content_visible'
})
.factory('PATH', [
  function() {
    return {
      APPLICATION_NAME: 'boilerplate'
    };
  }
])
.config([
  '$httpProvider', 
  function($httpProvider) {
    var password, user;
    user = 'readonly';
    password = 'readonly';
    return $httpProvider.defaults.headers.common.Authorization = 'Basic ' + btoa(user + ':' + password);
  }
]);