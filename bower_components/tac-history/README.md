### TAC Development Guide

# tac-history

A site developed with angularjs forms actually a web application.
This means that the application has a global state within our tab, which is changing and creating the feeling of 'navigation'.
The ngRoute component is responsible for virtualize the redirection over Angular.js sites
However, it not provides a handling on your browsing history.
To solve this problem, 'tac.history' component adds the function of 'go back' to the angular applications, skipping of course those views that do not really make a state of the application (messages or error successful development, for instance)

## Install

This repo is for distribution on `bower`. The source for this module is in the
[main TacTeam repo](https://github.com/tacteam/history).
Please file issues and pull requests against that repo.

### bower

You can install this package with `bower`.

```shell
bower install tac-history
```

Optionally you can add --save prefix to add package to bower.js

```shell
bower install tac-history --save
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/tac-history/dist/history.js"></script>
```

## Documentation

##### Angular dependency

You must add the component identifier to Angular dependencies in order to load module into the application.

```js
angular.module('main-application',[
  '...dependencies...',
  'module.tac.history',
  '...dependencies...'
])
```

##### Initialize component

```js
angular.module('main-application')
.run([
  'tac.history', 
  function(history) {
    history.initialize();
  }
])
```

Additionally you can pass regular expressions as argument on the 'initialize' method to add skippable patterns

##### Using

```js
angular.module('main-application')
.controller('some.controller', [
  '$scope',
  'tac.history', 
  function($scope, history) {
    $scope.go_back_button = function(){
      history.go_back();
    };
  }
])
```


## License

License is not available yet
