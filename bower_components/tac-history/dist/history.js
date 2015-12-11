(function() {
  'use strict';
  angular.module('module.tac.history', []).factory('tac.history', [
    '$rootScope', '$location', function($rootScope, $location) {
      var history, last, max_store, push_visited, redirect, skip, visited;
      visited = [];
      last = null;
      max_store = 10;
      skip = [];
      push_visited = function(path) {
        visited.push(last);
        if (visited.length > max_store) {
          visited.shift();
        }
        return last = path;
      };
      redirect = function(path) {
        $location.path(path);
        return $rootScope.$apply();
      };
      return history = {
        modes: {
          forward: {
            identifier: 'forward',
            process_route_change: function() {
              return push_visited($location.path());
            },
            go_back: function() {
              var next;
              next = visited.pop();
              history.current_mode = history.modes.backward;
              return redirect(next);
            }
          },
          backward: {
            identifier: 'backward',
            process_route_change: function() {
              last = $location.path();
              return history.current_mode = history.modes.forward;
            },
            go_back: function() {
              var next;
              next = visited.pop();
              return redirect(next);
            }
          },
          initial: {
            identifier: 'initial',
            process_route_change: function() {
              last = $location.path();
              return history.current_mode = history.modes.forward;
            }
          }
        },
        initialize: function(_skip) {
          skip = _skip;
          this.current_mode = this.modes.initial;
          $rootScope.$on('$routeChangeSuccess', function(event, next) {
            return history.current_mode.process_route_change();
          });
          return this.go_back = function() {
            if (visited.length > 0) {
              this.current_mode.go_back();
              return true;
            } else {
              return false;
            }
          };
        }
      };
    }
  ]);

}).call(this);
