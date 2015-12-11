'use strict'

angular.module('module.tac.history', [])

.factory('tac.history', [
  '$rootScope'
  '$location'
  ($rootScope, $location) ->
    
    visited = []
    last = null
    max_store = 10
    skip = []
    
    push_visited = (path)->
      visited.push last
      if visited.length > max_store
        visited.shift()
      last = path
    
    redirect = (path)->
      $location.path path
      $rootScope.$apply()
      
    history =
      modes:
        forward:
          identifier: 'forward'
          process_route_change: ->
            push_visited $location.path()
          go_back:->
            next = visited.pop()
            history.current_mode = history.modes.backward
            redirect next
        
        backward:
          identifier: 'backward'
          process_route_change: -> 
            last = $location.path()
            history.current_mode = history.modes.forward
          go_back:->
            next = visited.pop()
            redirect next
          
        initial:
          identifier: 'initial'
          process_route_change: ->
            last = $location.path()
            history.current_mode = history.modes.forward
      
      initialize: (_skip)->
        skip = _skip
        @current_mode = @modes.initial
        $rootScope.$on '$routeChangeSuccess', (event, next)-> history.current_mode.process_route_change()
        
        @go_back = ()->
          if visited.length > 0
            @current_mode.go_back()
            true
          else
            false
        
    
])